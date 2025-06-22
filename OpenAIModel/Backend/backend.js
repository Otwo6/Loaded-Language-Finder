import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/analyze', async (req, res) => {
  const { text } = req.body;
  const apiKey = req.header("API-Key");

  if (!apiKey) 
  {
    return res.status(401).json({ error: "Missing API key" });
  }

  const openai = new OpenAI({ apiKey });
      
  let hasPerc = false;
  let hasWords = false;
  let hasText = false;

  let attempts = 0;
  const MAX_ATTEMPTS = 5;

  while(!hasPerc || !hasWords || !hasText)
  {
    attempts++;
    hasPerc = false;
    hasWords = false;
    hasText = false;

    if(attempts > MAX_ATTEMPTS)
    {
      return res.status(500).json({ error: 'Error returning the correct format via LLM' });
    }

    try {
      const output = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'user',
            content: `Read the following text carefully: "${text}" Perform the following tasks exactly in the format below. Do not repeat or rephrase any part of the original statement. Do not provide additional commentary. Write the Full Text Loaded Percentage, based on how loaded the statement is. Write a Fully Revised Text version of the text. Lastly, write loaded words included in the text, starting each with Loaded Word:[word];[reasoning]. Format strictly as this example does:Full Text Loaded Percentage: 83\nLoaded Word: Greedy CEO;expresses moral judgment and hostility toward the CEO\nLoaded Word: slashed;evokes violent or aggressive action rather than neutral business decision\nLoaded Word: innocent citizens;implies moral purity of the affected individuals, creating emotional bias\nLoaded Word: boost profit;suggests selfish or exploitative motive\nFully Revised Text: The CEO implemented job cuts affecting employees in order to increase company profits. FOLLOW THIS FORMAT EXACTLY`
          }
        ]
      });

      const outputResponse = output.choices[0].message.content.trim();

        const lines = outputResponse.split('\n').map(line => line.trim()).filter(line => line !== '');

        let loadedPercentage = '';
        let loadedWords = [];
        let revisedText = '';

        // Parse each line
        lines.forEach(line => {
          if (line.startsWith('Full Text Loaded Percentage:')) {
            loadedPercentage = line.replace('Full Text Loaded Percentage:', '').trim();
            hasPerc = true;
          } else if (line.startsWith('Loaded Word:')) {
            const [wordPart, description] = line.replace('Loaded Word:', '').split(';');
            loadedWords.push({
              word: wordPart.trim(),
              description: description.trim()
            });
            hasWords = true;
          } else if (line.startsWith('Fully Revised Text:')) {
            revisedText = line.replace('Fully Revised Text:', '').trim();
            hasText = true;
          }
        });

        // Output the result
        const result = {
          loadedPercentage,
          loadedWords,
          revisedText
        };

        console.log(outputResponse);

        return res.json({ revisedText: result.revisedText,
                  percentage: result.loadedPercentage,
                  wordList:  result.loadedWords
        });

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error running model' });
    }
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));