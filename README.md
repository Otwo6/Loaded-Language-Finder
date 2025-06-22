# <p align="center">NUANCE</p>

In a world of media polarization, our sources no longer give us the freedom to form our own opinions. 
This fractured landscape limits our ability to form independent, well-informed thoughts.
NUANCE is designed to cut through this noise by providing a flexible, AI-powered assistant that helps you analyze, understand, and engage with information on your own terms.\
NUANCE supplies multiple tiers of service—starting from completely free options—so you don’t have to pay a dime to improve your media literacy.\
Media literacy is a crucial public good, essential for a healthy democracy, and NUANCE exists to empower everyone with better tools to navigate today’s complex information environment.

<hr />

<p align="center">
<img src="https://raw.githubusercontent.com/jitsi/jitsi-meet/master/readme-img1.png" width="900" />
</p>

<hr />

## What is NUANCE?

NUANCE is an intelligent browser extension designed to help you identify and understand loaded language in any text you encounter online. 
Loaded language uses emotionally charged words or phrases intended to influence opinion by appealing to feelings rather than facts. This can often skew how information is perceived, contributing to bias and polarization.

With NUANCE, you can highlight or input any statement, article excerpt, or social media post, and instantly see:

    Which words or phrases are loaded or emotionally charged.

    Descriptions explaining why these words are considered loaded.

    The overall "loading score" of the statement, showing how emotionally biased it might be.

By making loaded language visible and understandable, NUANCE empowers you to critically analyze media and communications, giving you tools to form more balanced, thoughtful opinions free from hidden emotional manipulation.

## How It Works

1. Highlight or input a sentence, headline, or paragraph.
2. NUANCE scans the text for emotionally loaded language using natural language processing techniques.
3. Each loaded word is identified and explained in context.
4. The extension calculates an overall "emotional charge score" for the text.
5. You get a clear breakdown of potential bias and manipulative framing in seconds.

## Tier Breakdown

| Tier | Backend Type             | API Key Required | Hosted By       | Cost                            | Notes                                                                 |
|:----:|--------------------------|:----------------:|------------------|----------------------------------|-----------------------------------------------------------------------|
| 1    | Ollama Local Model       | ❌               | You (local)      | Free                            | Slower and potentially less accurate depending on model used locally |
| 2    | OpenAI (Self-Hosted)     | ✅  | You (your server)| Free | You host the backend yourself, you use your own API key |
| 3    | OpenAI (Managed Backend) | ✅  | NUANCE           | $1/month | No setup needed; we host backend servers, you keep your own API key        |
| 4    | OpenAI (Shared Key)      | ❌               | NUANCE           | $1/month + OpenAI usage fees | Fastest setup; no API key or server required                         |

## Installation & Setup
Common Steps

    Clone or download the folder for the tier you wish to use.

    Open Chrome and go to chrome://extensions.

    Enable Developer Mode.

    Click Load unpacked and select the frontend folder of your desired tier (e.g., /OpenAIMode/Frontend).
Tier 1: Ollama Local Model

    Download and install [Ollama](https://ollama.com/download) on your machine.
	
    Load the extension from /extension-tier1-ollama.

    In NUANCE settings, input your local model URL (default: http://localhost:11434).

Tier 2: OpenAI with Self-Hosted Backend (BYOK)

    Install the backend server in /backend (or use your own).

    Add your OpenAI API key as an environment variable (OPENAI_API_KEY) or .env file.

    Start your server (npm install && npm run start).

    Load extension from /extension-tier2-openai.

    Enter your backend URL in the settings page.

Tier 3: Managed Backend + Your API Key

    Subscribe to NUANCE via the provided portal (link TBD).

    Load extension from /extension-tier3-managed.

    Enter your OpenAI API key in the settings page.

    All other backend interactions are managed for you.

Tier 4: Fully Managed Backend + Shared Key

    Load extension from /extension-tier4-shared.

    No API key needed.

    You’ll be charged a micro-fee per use (~< $0.01).

    Payments are tracked securely and transparently.


		Find where your file location for NUANCE

 		Open the Backend folder and copy the address

		In your Terminal, type "CD " then paste the address

 		Type "node backend"

		When you see "Server running on http://localhost:5000" your backend is functioning
		
## Security

For a comprehensive description of all Jitsi Meet's security aspects, please check [this link](https://jitsi.org/security).

For a detailed description of Jitsi Meet's End-to-End Encryption (E2EE) implementation,
please check [this link](https://jitsi.org/e2ee-whitepaper/).

For information on reporting security vulnerabilities in Jitsi Meet, see [SECURITY.md](./SECURITY.md).

## Contributing

If you are looking to contribute to Jitsi Meet, first of all, thank you! Please
see our [guidelines for contributing](CONTRIBUTING.md).

<br />
<br />

<footer>
<p align="center" style="font-size: smaller;">
Built with ❤️ by the Jitsi team at <a href="https://8x8.com" target="_blank">8x8</a> and our community.
</p>
</footer>
