#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the essay title from command line argument
const title = process.argv[2];

if (!title) {
  console.log('Usage: node new-essay.js "Your Essay Title"');
  console.log('Example: node new-essay.js "My Thoughts on AI"');
  process.exit(1);
}

// Create a slug from the title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
  .replace(/\s+/g, '-') // Replace spaces with hyphens
  .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
  .trim();

// Get current date
const today = new Date().toISOString().split('T')[0];

// Create the markdown content
const content = `---
title: "${title}"
date: "${today}"
category: "essays"
excerpt: "Add a brief description of your essay here."
---

# ${title}

Write your essay content here using markdown.

## Section Heading

You can use:
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Code blocks

\`\`\`javascript
// Code example
function example() {
  console.log("Hello, world!");
}
\`\`\`

## Another Section

Continue writing your thoughts...
`;

// Define the file path
const postsDir = path.join(__dirname, 'src', 'content', 'posts');
const filePath = path.join(postsDir, `${slug}.md`);

// Ensure the posts directory exists
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

// Check if file already exists
if (fs.existsSync(filePath)) {
  console.log(`❌ File already exists: ${filePath}`);
  console.log('Choose a different title or delete the existing file.');
  process.exit(1);
}

// Write the file
fs.writeFileSync(filePath, content);

console.log(`✅ New essay created: ${filePath}`);
console.log(`📝 Slug: ${slug}`);
console.log(`📅 Date: ${today}`);
console.log('');
console.log('Next steps:');
console.log('1. Edit the file in your text editor');
console.log('2. Update the excerpt in the frontmatter');
console.log('3. Write your content');
console.log('4. Save and commit to git');
console.log('5. Push to GitHub to publish');