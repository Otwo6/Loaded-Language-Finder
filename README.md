# <p align="center">NUANCE</p>

<p align="center"><i>“The man who reads nothing at all is better educated than the man who reads nothing but newspapers.”</i></p> <p align="center">— Thomas Jefferson</p>

In a world of media polarization, our sources no longer give us the freedom to form our own opinions.  
This fractured landscape limits our ability to form independent, well-informed thoughts.  
**NUANCE** is designed to cut through this noise by providing a flexible, AI-powered assistant that helps you analyze, understand, and engage with information on your own terms.  
We supply multiple forms of execution, including free options—so you don’t have to pay a dime to improve your media literacy.  
Media literacy is a crucial public good, essential for a healthy democracy, and NUANCE exists to empower everyone with better tools to navigate today’s complex information environment.

---

<p align="center">
<img src="Logo.png" width="100" alt="NUANCE Logo" /></p>

---

## What is NUANCE?

**NUANCE** is an intelligent browser extension designed to help you identify and understand **loaded language** in any text you encounter online.

Loaded language uses emotionally charged words or phrases to influence opinion by appealing to feelings rather than facts. This can skew perception, reinforce bias, and amplify polarization.

With NUANCE, you can highlight or input any statement, article excerpt, or social media post and instantly see:

- Which words or phrases are emotionally charged
- Explanations for why they're considered loaded
- An overall "loading score" showing the emotional bias level of the statement

By making loaded language visible, NUANCE empowers you to engage critically and form more independent, thoughtful opinions.

---

## How It Works

1. Highlight or input a sentence, headline, or paragraph.
2. NUANCE scans the text for emotionally loaded words using natural language processing.
3. Each loaded word is identified and explained.
4. A total "emotional charge score" is calculated.
5. You receive a clear, real-time breakdown of potential manipulation.

---

## Tier Breakdown

| Tier | Backend Type             | API Key Required | Hosted By       | Cost                             | Notes                                                                 |
|:----:|--------------------------|:----------------:|------------------|----------------------------------|-----------------------------------------------------------------------|
| 1    | Ollama Local Model       | ❌               | You (local)      | Free                             | Slower, may be less accurate based on model quality                  |
| 2    | OpenAI (Self-Hosted)     | ✅               | You (your server)| Free (OpenAI key required)        | BYOK and BYOS (bring your own server) for full control               |
| 3    | OpenAI (Managed Backend) | ✅               | NUANCE           | $1/month + OpenAI usage fees      | Hassle-free; you provide API key, we run backend                     |
| 4    | OpenAI (Shared Key)      | ❌               | NUANCE           | Token fee per use (~< $0.01/use) | Plug-and-play; no key or setup needed                                |

---

## Installation & Setup

### Common Steps

1. Clone or download the NUANCE repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the `/Frontend` folder inside your desired tier folder.

---

### Tier 1: Ollama Local Model

1. [Download Ollama](https://ollama.com/download) and install it.
2. Pull a local model:

   ```
   ollama pull llama3.1
   ```
3. (Optional) If using a different model, open `backend.js` and change:

   ```js
   model: 'llama3.1' → model: 'your_model_name'
   ```
4. Load the extension from `/OllamaMode/Frontend`.
5. Run your backend locally:

   ```
   cd Backend
   node backend.js
   ```
6. When you see `Server running on http://localhost:5000`, you're ready.


---

### Tier 2: OpenAI (Self-Hosted)

1. Visit: [https://platform.openai.com/docs/models/o3](https://platform.openai.com/docs/models/o3)
2. Generate an OpenAI API key. **Keep it secret.**
3. Input your key in the extension popup.
4. Run your backend locally:

   ```
   cd Backend
   node backend.js
   ```
5. When you see `Server running on http://localhost:5000`, you're ready.

---

### Tier 3: Managed Backend + Your API Key

*Setup instructions coming soon.*

---

### Tier 4: Fully Managed Backend + Shared Key

*Setup instructions coming soon.*

---

## Backend Setup (For Tier 1 & 2)

1. Navigate to the backend directory:

   ```
   cd /path/to/NUANCE/Backend
   ```
2. Start the server:

   ```
   node backend.js
   ```
3. Confirm: You should see
   `Server running on http://localhost:5000`

---

## Privacy

* **Tier 1:** 100% local. Your data never leaves your machine.
* **Tier 2:** You control the backend and API key. NUANCE sends requests only to your server.
* **Tier 3:** Your queries pass through NUANCE's backend. We do not store input or API keys.
* **Tier 4:** We process requests on your behalf using our key. Only usage count (not input) is logged anonymously for billing.

**We never collect** your browsing history, keystrokes, or personal content.

---

## Legal & Ethical Disclaimer

NUANCE is a tool designed to **highlight emotionally charged or manipulative language** to support media literacy and critical thinking. It is **not** a fact-checker, nor does it claim to detect or correct misinformation.

While NUANCE uses AI and linguistic pattern recognition to surface bias in wording, it does not validate the truth or accuracy of the content you input. If you submit misinformation or manipulated narratives, the extension will still return results based on that content.**The quality of insights depends on the quality of the input.**

### Stay Vigilant:

> NUANCE is intended to supplement your judgment, not replace it. Always consult multiple sources, especially on complex or controversial issues.

#### Additional Legal Notices:

* **No Liability for Misuse:** We are not responsible for any actions taken based on NUANCE’s outputs. Users must apply critical thinking and personal judgment.
* **No Guarantee of Accuracy:** NUANCE provides AI-generated suggestions based on language patterns. These are probabilistic and may not always reflect bias correctly.
* **No Medical, Legal, or Political Advice:** This tool is not certified for use in professional or institutional decision-making. It is intended for educational and informational purposes only.
* **Privacy Preserved:** NUANCE does not collect or store any user data unless you are using Tier 3 or Tier 4. Even in those cases, only minimal metadata is collected for performance or billing purposes, and no personal content is retained.
* **Third-Party APIs:**  If you use Tiers 2 or 3, you are also agreeing to the Terms of Service and Privacy Policies of third-party APIs (e.g., OpenAI). Make sure to read and understand them.

---

## License

This project is licensed under the **MIT License**.
See [`LICENSE`](./LICENSE) for details.

---

<p align="center"><i>“A popular government without popular information, or the means of acquiring it, is but a prologue to a farce or a tragedy.”</i></p> <p align="center">— James Madison</p>
