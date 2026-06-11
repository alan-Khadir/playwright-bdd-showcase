# Playwright BDD Showcase — Full Project Plan

This document contains the full project plan for the `playwright-bdd-showcase` repository, including the original step-by-step plan, starting scenarios, folder structure, and a delta section describing what has already been implemented in the repository.

> NOTE: This project demonstrates end-to-end test automation using BDD (Cucumber/Gherkin), Playwright, TypeScript, and an eventual MCP/Jira integration. Follow the steps below to recreate the project on your machine.

---

## Project Summary

- Repository name: `playwright-bdd-showcase` (public, under your personal GitHub account)
- Purpose: a portfolio project demonstrating Playwright + Cucumber BDD, Page Object Model, and an AI-assisted MCP integration with Jira

## Components

1. **Jira Board** — tickets written in BDD/Gherkin format
2. **Simple Web App (Playground)** — plain HTML/CSS/JS app with `Sign In`, `Create Account`, `Dashboard` pages
3. **Playwright BDD Test Framework** — TypeScript + Cucumber + POM
4. **Jira MCP Integration** — using `@sooperset/mcp-atlassian` to pull requirements from Jira into VS Code
5. **3-Agent Workflow (future)** — agents to build the app, pull Jira requirements, and write Playwright tests

## Folder Structure

```
playwright-bdd-showcase/
├── webapp/                          # Playground web app
│   ├── html/                        # static HTML pages
│   │   ├── index.html               # Landing/Home page
│   │   ├── signin.html              # Sign in page
│   │   ├── create-account.html      # Registration page
│   │   └── dashboard.html           # Post-login page
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js                   # Form validation, navigation
├── tests/                           # Playwright BDD framework
│   ├── package.json
│   ├── tsconfig.json
│   ├── playwright.config.ts
│   ├── cucumber.js
│   ├── features/                    # Gherkin feature files
│   │   └── navigation.feature
│   ├── src/
│   │   ├── steps/                   # Step definitions
│   │   │   └── navigation.steps.ts
│   │   ├── pages/                   # Page Object Model
│   │   │   └── HomePage.ts
│   │   └── support/
│   │       ├── hooks.ts
│   │       └── world.ts
│   └── reports/
├── docs/
│   └── project-plan.md              # this document
├── .vscode/
│   └── mcp.json                     # MCP server config
├── .github/
│   └── workflows/
│       └── playwright.yml           # CI/CD (optional)
└── README.md
```

## What You Do vs What AI Does

| Task | I DO IT | AI DOES IT |
|------|---------|------------|
| Install tools (Node, Git, etc.) | ✅ | |
| Set up Git identity | ✅ | |
| Create the repo on GitHub.com | ✅ | |
| Clone the repo to my machine | ✅ | |
| Open the project in VS Code | ✅ | |
| Create the folder structure | ✅ | ✅ (assisted)
| Create Jira board + tickets | ✅ | |
| Write the Gherkin scenarios | ✅ | |
| Git add, commit, push | ✅ | |
| Build the webapp HTML/CSS/JS | | ✅ (starter files created)
| Write `tsconfig.json`, `cucumber.js` config | | ✅ (created)
| Write Page Objects | ✅ First one, then AI does the rest | |
| Write Step Definitions | ✅ First one, then AI does the rest | |
| Write `hooks.ts` and `world.ts` | | ✅ (created)
| Configure MCP | | ✅ (guidance + sample config)
| Write documentation | ✅ (own words) | |

## Starting Scenarios (Jira tickets)

### PBS-1: User navigates to Sign In page
```
Feature: Sign In Navigation

  Scenario: User navigates to Sign In page
    Given a user is on the Home page
    When they click on the "Sign In" button
    Then they should be taken to the Sign In page
```

### PBS-2: User navigates to Create Account page
```
Feature: Create Account Navigation

  Scenario: User navigates to Create Account page
    Given a user is on the Home page
    When they click on the "Create Account" button
    Then they should be taken to the Create Account page
```

### Combined feature file (`tests/features/navigation.feature`)

```gherkin
Feature: Home Page Navigation

  Description:
  As a user, I want to navigate to key pages from the Home page
  so that I can access my account or register for a new one.

  Scenario: User navigates to Sign In page
    Given a user is on the Home page
    When they click on the "Sign In" button
    Then they should be taken to the Sign In page

  Scenario: User navigates to Create Account page
    Given a user is on the Home page
    When they click on the "Create Account" button
    Then they should be taken to the Create Account page
```

## Step-by-Step Plan (High level)

### PHASE 0 — Prerequisites (do before opening VS Code)

1. Install Node (v18+), VS Code, Git, Python (for MCP), and create accounts for GitHub and Jira.
2. Set Git identity:
```
git config --global user.name "My Name"
git config --global user.email "my-github-email@example.com"
```
3. Create the GitHub repository `playwright-bdd-showcase` (public) and clone it locally.

### PHASE 1 — Folder structure and repo scaffold

4. Create the folder structure:
   - `webapp/`
   - `tests/`
   - `docs/`
   - `.vscode/`
   - `.github/workflows/`
   - add `.gitkeep` files to empty folders so Git tracks them.

### PHASE 2 — Webapp implementation and verification

5. Build the playground webapp using AI-assisted content.
   - Create `webapp/html/index.html`, `webapp/html/signin.html`, `webapp/html/create-account.html`, `webapp/html/dashboard.html`.
   - Create `webapp/css/styles.css`.
   - Create `webapp/js/app.js`.
   - Use `data-testid` attributes on interactive elements.
   - Note: in this session the webapp files were created from AI-generated content and added directly into the repo. There was no separate webapp generator command used.
6. Manually verify the webapp in a browser:
```bash
cd webapp
npx serve .
```
   - Confirm the Home page loads.
   - Confirm Sign In and Create Account buttons navigate correctly.
   - Confirm form behavior works.

### PHASE 3 — Playwright + Cucumber test setup

7. In `tests/`, initialize the test project.
   - Run `npm init playwright@latest`.
   - In this session, the generated default Playwright sample tests were removed because the project uses Cucumber feature files instead.
8. Install the Cucumber and TypeScript dependencies:
```
npm install --save-dev @cucumber/cucumber typescript ts-node @types/node
```
9. Add test configuration files:
   - `tests/cucumber.js`
   - `tests/tsconfig.json`
10. Add npm scripts to `tests/package.json`:
```json
"scripts": {
  "test": "playwright test",
  "test:bdd": "cucumber-js --require-module ts-node/register --require src/**/*.ts --format progress"
}
```
11. Create the Cucumber support infrastructure:
   - `tests/src/support/world.ts`
   - `tests/src/support/hooks.ts`
12. Create Page Objects:
   - `tests/src/pages/HomePage.ts`
13. Create step definitions:
   - `tests/src/steps/navigation.ts`
14. Create the feature file:
   - `tests/features/navigation.feature`
15. Run the tests with the webapp server running:
```bash
# Terminal 1: start the webapp
cd webapp
npx serve .

# Terminal 2: run BDD tests
cd tests
npm run test:bdd
```

16. Run tests with a visible browser for debugging.
   - Update `tests/src/support/hooks.ts` from `headless: true` to `headless: false`.
   - Or in PowerShell:
```powershell
$env:PWDEBUG = '1'
cd tests
npm run test:bdd
```

### PHASE 4 — Jira board creation and MCP integration

16. Create a Jira project or reuse an existing one.
17. Create a Jira API token for MCP integration.
18. Create an `mcp-env-vars.env` file with your Jira credentials and secrets.
19. Start the local MCP server via Docker Compose:
```powershell
docker-compose up mcp-atlassian
```
20. Add `.vscode/mcp.json` to point to the local Docker-based MCP service.
21. Use Copilot agent mode to query tickets and import Gherkin into `tests/features/`.

### PHASE 5 — Documentation and CI

24. Add `docs/` content:
   - `docs/setup-guide.md`
   - `docs/architecture.md`
   - `docs/jira-setup.md`
   - `docs/mcp-setup.md`
   - `docs/learnings.md`
25. Add a GitHub Actions workflow for running tests.

### PHASE 6 — Bonus features

26. Add HTML test reports and screenshot capture on failure.
27. Add the 3-Agent workflow (build app, pull Jira, write tests) as an advanced goal.

## Running tests locally (diagram)

Run the webapp in one terminal and the BDD tests in another. Tests will interact with `http://localhost:3000/html/index.html`.

## Git Cheat Sheet (recommended commands)

```
git add .
git commit -m "describe what I did"
git push
git status
git log --oneline
git pull
```

## Suggested timeline

Week 1: Steps 1-8 (setup, repo, Jira board)
Week 2: Steps 9-16 (webapp + BDD tests)
Week 3: Steps 17-20 (MCP, docs, CI)
Week 4+: Bonus features

---

## Delta: What has been implemented so far (automatically by the AI during this session)

### Actual workflow notes from this session

- The `tests/` folder structure was created manually first, including `features/`, `src/pages/`, `src/steps/`, and `src/support/`.
- The command `npm init playwright@latest` was run in `tests/` to generate the initial Playwright setup.
- The generated example test files and `tests/` sample test folder were removed because the project uses Cucumber feature files instead.
- `webapp/html/` and related static files were created directly in the repository by adding the file contents using the AI assistant.
- The webapp server must be started before running the BDD tests; earlier test attempts failed because the webapp pages and server were not yet available.

Files and changes already created in the repository:

- `tests/`:
  - `package.json` — scripts added: `test` and `test:bdd`
  - `cucumber.js` — Cucumber CLI defaults
  - `tsconfig.json` — TypeScript config for ts-node and step defs
  - `src/support/world.ts` — custom Cucumber World (stores `page`, `context`, `browser`, `baseURL`)
  - `src/support/hooks.ts` — Cucumber `Before`/`After` hooks that launch/close Playwright Chromium
  - `src/pages/HomePage.ts` — Page Object with `goTo`, `clickSignIn`, `clickCreateAccount`
  - `src/steps/navigation.ts` — step definitions wired to the feature
  - `features/navigation.feature` — basic navigation feature (two scenarios)

- `webapp/`:
  - `html/index.html`, `html/signin.html`, `html/create-account.html`, `html/dashboard.html`
  - `css/styles.css`
  - `js/app.js`

Changes made during the session:
- Adjusted step wording and signatures to match feature text and to accept `{string}` arguments.
- Increased Cucumber default hook timeout to avoid early `Before` failures.
- Moved HTML files into `webapp/html/` and updated `HomePage.goTo()` to point to `/html/index.html`.

## Remaining TODOs

- Write additional Page Objects and step definitions (beyond `HomePage` and navigation steps).
- Expand feature coverage (sign-in validation, account creation flows, negative tests).
- Add MCP configuration under `.vscode/mcp.json` and test the Jira import flow.
- Add CI workflow and test reporting.
- Commit and push final changes to GitHub; add `docs/setup-guide.md` (or update `README.md`) with condensed run steps.

## Recommended README update

Yes — also update the top-level `README.md` with a condensed plan and run instructions. The README should contain at minimum:

- Short project description
- Quickstart commands to run the webapp and tests
- Links to `docs/project-plan.md` for full instructions

Example README snippet to add:

```
# Playwright BDD Showcase

This repo demonstrates Playwright with Cucumber BDD and a minimal playground webapp.

Quickstart:

```bash
cd webapp
npx serve .

cd tests
npm run test:bdd
```

See `docs/project-plan.md` for the full project plan and step-by-step instructions.
```

---

If you'd like, I will now:

- update `README.md` with the condensed quickstart and a link to this plan, and/or
- create a `docs/setup-guide.md` with copyable commands and troubleshooting steps.

Tell me which one to do next. 
