# MCP Setup with mcp-atlassian

This guide explains how to run the Atlassian MCP server locally using Docker and the official MCP image.

## Prerequisites

- Docker installed
- Git installed
- Jira Cloud account and API token

## 1) Create your environment file

Create `mcp-env-vars.env` in the repository root with your Jira details:

```text
JIRA_URL=https://your-company.atlassian.net
JIRA_USERNAME=you@company.com
JIRA_API_TOKEN=your_api_token
MCP_VERY_VERBOSE=true
```

> Do not commit this file if it contains real credentials.

## 2) Start the local MCP server with Docker Compose

From the repository root:

```powershell
docker-compose up mcp-atlassian
```

This launches the official MCP Atlassian container and exposes it on port `8080`.

## 3) Configure VS Code to use it

Create `mcp-env-vars.env` in the repository root with your Jira details:

```text
JIRA_URL=https://your-company.atlassian.net
JIRA_USERNAME=you@company.com
JIRA_API_TOKEN=your_api_token
MCP_VERY_VERBOSE=true
```

> Do not commit this file if it contains real credentials.

## 3) Start the local MCP server with Docker Compose

From the repository root:

```powershell
docker-compose up --build mcp-atlassian
```

This builds the local container from `.mcp/atlassian` and runs it on port `8080`.

## 4) Configure VS Code to use it

The root `.vscode/mcp.json` is already configured to start the service via Docker Compose.

If you need to customize it, make sure it points to the root `docker-compose.yml` and uses the local submodule build.

## 5) Verify the service

Open a new PowerShell window and run:

```powershell
curl http://localhost:8080/health
```

If the server is running, you should get a healthy response.

## 6) Use the MCP server from VS Code

In VS Code, run the configured MCP server from the Copilot/MCP integration menu.

Once running, you can ask the AI to query Jira issues and import them into `tests/features/`.

## Notes

- Using the local submodule build is the best choice for this repo because it keeps the MCP dependency inside the project.
- If you want a simpler setup later, you can switch to the official container image instead of building locally.
- The Docker Compose setup is easier to manage than a long `docker run ...` command.
