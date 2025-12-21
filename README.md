<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1tizzwi16Xf1ihhkQOBqL1hHilIRzz_bl

## Run Locally

**Prerequisites:**  Node.js

### 🤖 AI Agents: Start Here
If you are an AI agent tasked with contributing to this project:
1.  **Read the Manual**: [docs/AGENT_CONTEXT.md](docs/AGENT_CONTEXT.md) is your primary source of truth.
2.  **Check the Plan**: [docs/PROJECT_TRACKER.md](docs/PROJECT_TRACKER.md) tells you what needs to be built.
3.  **Validate**: Always run `npx tsx scripts/validateData.ts` before declaring a task complete.

### Human Developers
1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
