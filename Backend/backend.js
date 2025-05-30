import express from 'express';
import cors from 'cors';
import ollama from 'ollama';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/analyze', async (req, res) => {
  const { text } = req.body;

  try {
    const output = await ollama.generate({
      model: 'llama3.1',
      //prompt: `Analyze the following text:\n\n"${text}"\n\n In the world of american ppolitics, is this a left leaning or right leaning statement?`,
	  prompt: 'Read the following text carefully: "That corrupt politician is just lining his own pockets." Perform the following tasks exactly in the format below. Do not repeat or rephrase any part of the original statement. Do not provide additional commentary. Format strictly as follows:Full Text Loaded Percentage: [Insert percentage as a number followed by % only]\n1. Loaded Word: [Insert word or phrase];[Insert brief explanation]\n2. Loaded Word: [Insert word or phrase];[Insert brief explanation]\n3. Loaded Word: [Insert word or phrase];[Insert brief explanation]\n (Continue as needed for each loaded term or phrase)Fully Revised Text: [Insert the full, neutrally rewritten sentence here.]'
    });

	const inputText = 
	`Full Text Loaded Percentage: 83%

    Loaded Word: greedy CEO;expresses moral judgment and hostility toward the CEO

    Loaded Word: slashed;evokes violent or aggressive action rather than neutral business decision

    Loaded Word: innocent citizens;implies moral purity of the affected individuals, creating emotional bias

    Loaded Word: boost profit;suggests selfish or exploitative motive
	
	Fully Revised Text: The CEO implemented job cuts affecting employees in order to increase company profits.`;
	res.json({ sentiment: output.response.trim() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error running model' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));