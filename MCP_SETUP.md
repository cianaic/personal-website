# Sanity MCP Server Setup Guide

This guide will help you set up the Sanity Model Context Protocol (MCP) server to connect your Sanity content directly to Claude Desktop.

## What is Sanity MCP?

The Sanity MCP server allows you to:
- 🤖 Let AI explore and understand your content library
- 🔄 Automate content operations through natural language
- 📊 Have AI respect your content structure and validation rules
- 🔍 Perform semantic search based on meaning, not just keywords

## Prerequisites

1. **Deploy your schema** (if not already done):
   ```bash
   cd "/Users/cianmcglynn/Code/Projects/repos/personal website"
   npx sanity schema deploy
   ```

2. **Create a Sanity API token**:
   - Go to [sanity.io/manage](https://sanity.io/manage)
   - Select your project (`o3g2934y`)
   - Go to API > Tokens
   - Click "Add API token"
   - Name: "MCP Server"
   - Permissions: Editor (or Read-only if you only want read access)
   - Copy the token (it's only shown once!)

## Setup for Claude Desktop

### 1. Locate your Claude Desktop config file:

**macOS:**
```bash
~/Library/Application Support/Claude/claude_desktop_config.json
```

**Windows:**
```bash
%APPDATA%/Claude/claude_desktop_config.json
```

**Linux:**
```bash
~/.config/claude/claude_desktop_config.json
```

### 2. Update the config file:

Either create the file or merge this content with your existing configuration:

```json
{
  "mcpServers": {
    "sanity": {
      "command": "npx",
      "args": ["-y", "@sanity/mcp-server@latest"],
      "env": {
        "SANITY_PROJECT_ID": "o3g2934y",
        "SANITY_DATASET": "production",
        "SANITY_API_TOKEN": "YOUR_ACTUAL_TOKEN_HERE",
        "MCP_USER_ROLE": "developer"
      }
    }
  }
}
```

### 3. Replace the token:
- Replace `YOUR_ACTUAL_TOKEN_HERE` with the API token you created in step 2

### 4. Restart Claude Desktop

After updating the config, completely quit and restart Claude Desktop.

## How to Use

Once set up, you can interact with your Sanity content through Claude:

### Example prompts:
- "Show me all my blog posts"
- "Create a new essay about AI and productivity"
- "Update the excerpt for my latest post"
- "Find all links related to technology"
- "Publish my draft post about Sanity MCP"

### Important: Initialize context first
When starting a new conversation, always begin with:
"Please call get_initial_context to understand my Sanity setup"

## Security Notes

⚠️ **Production Dataset Warning**: 
- If using a token with write access to production, AI can create/update/delete content
- Consider using a development dataset for testing
- Use read-only tokens if you only need content exploration

## Troubleshooting

### Node Version Manager Users
If you use `nvm`, `mise`, `fnm`, or similar tools, you may need to ensure the correct Node.js version is available globally.

### Permission Issues
Claude will ask for explicit permission before running tools from the MCP server.

### Connection Issues
- Verify your API token is correct
- Ensure your schema is deployed: `npx sanity schema deploy`
- Check that your project ID matches: `o3g2934y`

## Available Operations

Once connected, you can:
- **Read**: Query and explore your content
- **Create**: Generate new blog posts and links
- **Update**: Modify existing content
- **Publish**: Manage content lifecycle
- **Search**: Find content semantically
- **Translate**: Convert content to different languages

## Next Steps

1. Deploy your schema: `npx sanity schema deploy`
2. Create your API token at sanity.io/manage
3. Update Claude Desktop config with your token
4. Restart Claude Desktop
5. Test with: "Please call get_initial_context"

Your Sanity content will now be directly accessible through Claude conversations!