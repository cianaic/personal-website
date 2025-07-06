# Writing Guide

This is your simple guide to creating new essays and links on your personal website.

## Quick Start - New Essay

The easiest way to create a new essay:

```bash
node new-essay.js "Your Essay Title"
```

This will:
- Create a new markdown file in `src/content/posts/`
- Generate a URL-friendly filename
- Add today's date automatically
- Create a template with frontmatter ready to edit

## Manual Essay Creation

If you prefer to create essays manually:

1. **Go to**: `src/content/posts/`
2. **Create**: A new file named `your-essay-title.md`
3. **Add frontmatter**:
   ```markdown
   ---
   title: "Your Essay Title"
   date: "2025-01-07"
   category: "essays"
   excerpt: "Brief description"
   ---
   ```
4. **Write** your content in markdown below the `---`

## Creating Links

1. **Go to**: `src/content/links/`
2. **Create**: A file named `YYYY-MM.md` (e.g., `2025-01.md`)
3. **Add frontmatter**:
   ```markdown
   ---
   month: "January"
   year: "2025"
   ---
   ```
4. **Add bullet points** with your thoughts and links:
   ```markdown
   - Found this [interesting article](https://example.com) about AI
   - Reading about [local-first software](https://example.com) and why it matters
   ```

## Publishing

After writing:

1. **Save** your file
2. **Commit** to git: `git add . && git commit -m "New essay: Your Title"`
3. **Push** to GitHub: `git push origin main`
4. **Done!** Your essay will appear on your website automatically

## File Locations

- **Essays**: `src/content/posts/your-essay.md`
- **Links**: `src/content/links/2025-01.md`

## Tips

- Use any text editor (VS Code, TextEdit, etc.)
- Write in plain markdown
- No databases or complex tools needed
- Your writing is just files that you own

That's it! Simple file-based writing.