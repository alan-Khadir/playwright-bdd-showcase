# Setup Guide

This guide explains how to start the local webapp, install dependencies, and run the Playwright BDD tests.

## Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later)
- npm
- Git
- Python (optional, only if you want to use `python -m http.server` instead of `serve`)

## Install dependencies

Open a terminal at the repository root:

```bash
cd C:/git-personal/playwright-bdd-showcase
```

Install project dependencies for the `tests` folder:

```bash
cd tests
npm install
```

## Start the webapp

Open a second terminal and start the static webapp server from the `webapp` folder.

If you have `serve` installed globally:

```bash
cd C:/git-personal/playwright-bdd-showcase/webapp
npx serve .
```

If `serve` is not installed, install it once:

```bash
npm install -g serve
cd C:/git-personal/playwright-bdd-showcase/webapp
serve .
```

Alternatively, use Python's built-in server:

```bash
cd C:/git-personal/playwright-bdd-showcase/webapp
python -m http.server 3000
```

The app should now be available at:

```text
http://localhost:3000/html/index.html
```

## Run the Playwright BDD tests

With the webapp server running, open another terminal and run:

```bash
cd C:/git-personal/playwright-bdd-showcase/tests
npm run test:bdd
```

## Configure the MCP Jira integration

Create a `mcp-env-vars.env` file in the repository root with your Jira credentials:

```text
JIRA_URL=https://your-company.atlassian.net
JIRA_USERNAME=you@company.com
JIRA_API_TOKEN=your_api_token
MCP_VERY_VERBOSE=true
```

Use the root-level `docker-compose.yml` to run the official MCP Atlassian container:

```powershell
docker-compose up mcp-atlassian
```

Your workspace `.vscode/mcp.json` is configured to launch this service via Docker Compose.

## Run tests with a visible browser

By default the Playwright test hooks launch Chromium in headless mode. To see the browser while tests run, use one of these options.

### Option 1: update hooks.ts

Edit `tests/src/support/hooks.ts` and change:

```ts
this.browser = await chromium.launch({ headless: true });
```

to:

```ts
this.browser = await chromium.launch({ headless: false });
```

### Option 2: use Playwright debug mode in PowerShell

In PowerShell, set the environment variable first and then run the tests:

```powershell
$env:PWDEBUG = '1'
cd C:/git-personal/playwright-bdd-showcase/tests
npm run test:bdd
```

This opens the Playwright browser and pauses on actions so you can inspect the flow.

### VS Code Extension

You can also use the Playwright VS Code Extension to create, run, and debug tests directly inside VS Code.
- Install the extension from the marketplace
- Open the workspace and use the Playwright test explorer
- This is especially useful for inspecting test failures and running individual scenarios

## What these commands do

- `npx serve .` starts a static file server from the `webapp` folder
- `npm install` installs the test dependencies in `tests/`
- `npm run test:bdd` starts Cucumber and runs your step definitions against the app

## Troubleshooting

- If the browser cannot connect to `http://localhost:3000`, make sure the webapp server is running.
- If the Playwright hooks timeout while launching Chromium, run:

```bash
cd C:/git-personal/playwright-bdd-showcase/tests
npx playwright install chromium
```

- If you are on PowerShell and want headed browser debugging, use:

```powershell
$env:PWDEBUG = '1'
npm run test:bdd
```

- If `serve` is not found, install it globally with `npm install -g serve` or use Python's `http.server`.

## Next steps

Once the tests run successfully, you can continue by:

- adding additional feature files to `tests/features/`
- expanding page objects under `tests/src/pages/`
- adding step definitions under `tests/src/steps/`
- documenting Jira and MCP configuration in `docs/jira-setup.md` and `docs/mcp-setup.md`
