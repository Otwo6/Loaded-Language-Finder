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
	
    In your terminal find where you installed Ollama and type "./ollama pull llama3.1" or pull another AI of your choice (WILL AFFECT EXTENSION ACCURACY)

    If you installed a different AI model, find backend.js and change  model: 'llama3.1' to  model: '{YOUR MODEL}'

Tier 2: OpenAI with Self-Hosted Backend (BYOK)

    Go to https://platform.openai.com/docs/models/o3

    Generate an API Key for o3 OpenAI model

    In the NUANCE extension, input the generated key (DO NOT SHARE ELSEWHERE)

Tier 3: Managed Backend + Your API Key

    TBD

Tier 4: Fully Managed Backend + Shared Key

    TBD

## Enabling Backend

	Find where your file location for NUANCE
	
	Open the Backend folder and copy the address
	
	In your Terminal, type "CD " then paste the address
	
	Type "node backend"
	
	When you see "Server running on http://localhost:5000" your backend is functioning
		
## Privacy

We care deeply about user privacy.

Tier 1: All data is processed locally on your machine.

Tier 2: Data is sent only to your self-hosted server.

Tier 3: Your queries are routed through NUANCE’s backend, but we never store your inputs or your API key.

Tier 4: Your requests are processed via NUANCE's backend and billed per use. We store only usage counts tied to anonymous IDs for billing — no personal data.

We do not track browsing history, keystrokes, or personal activity.

## Legal & Ethical Disclaimer

NUANCE is a tool designed to highlight emotionally charged or "loaded" language in order to promote critical thinking and media literacy. However, it is not a fact-checker, nor does it claim to detect or correct misinformation.

While NUANCE uses AI and linguistic pattern recognition to surface bias in wording, it does not validate the truth or accuracy of the content you input. If you submit misinformation or manipulated narratives, the extension will still return results based on that content. The quality of insights depends on the quality of input.

    🛡️ Stay vigilant. NUANCE is intended to supplement your judgment, not replace it. Always consult multiple sources, especially on complex or controversial issues.

    Additional Legal Notices

	    No Liability for Misuse: We are not responsible for any actions taken based on NUANCE’s outputs. Users must apply critical thinking and personal judgment.
	
	    No Guarantee of Accuracy: NUANCE provides AI-generated suggestions based on language patterns. These are probabilistic and may not always reflect bias correctly.
	
	    No Medical, Legal, or Political Advice: This tool is not certified for use in professional or institutional decision-making. It is intended for educational and informational purposes only.
	
	    Privacy Preserved: NUANCE does not collect or store any user data unless you are using Tier 3 or Tier 4. Even in those cases, only minimal metadata is collected for performance or billing purposes, and no personal content is retained.
	
	    Third-Party API Use: If you use Tiers 2 or 3, you are also agreeing to the Terms of Service and Privacy Policies of third-party APIs (e.g., OpenAI). Make sure to read and understand them.

## License

This project is licensed under the MIT License — see the LICENSE file for details.

<br />
<br />

<footer>
<p align="center" style="font-size: smaller;">
Built with ❤️ by the Jitsi team at <a href="https://8x8.com" target="_blank">8x8</a> and our community.
</p>
</footer>
