---
title: "Building a Personal Website in 2025"
date: "2025-01-07"
category: "essays"
excerpt: "Why I chose simplicity over complexity, and how markdown files became my CMS."
---

# Building a Personal Website in 2025

After years of using various content management systems, static site generators, and headless CMSs, I've come to a realization: the best writing system is the one that gets out of your way.

## The Journey to Simplicity

I started like many developers do - excited about the latest technologies. My first personal site used WordPress. Then came Ghost. Then Medium. Then Gatsby with Contentful. Then Next.js with Sanity. Each iteration promised to make writing easier, but somehow made it more complex.

The breaking point came when I spent an entire afternoon debugging a build error instead of writing. I realized I was spending more time maintaining my writing infrastructure than actually writing.

## The Markdown Renaissance

There's something beautiful about plain text files. They're portable, version-controlled, and will outlive any CMS. When you write in markdown, you own your content in the most fundamental way possible.

```markdown
---
title: "Your Post Title"
date: "2025-01-07"
category: "essays"
excerpt: "A brief description"
---

Your content here...
```

That's it. No databases, no APIs, no authentication tokens. Just files.

## Technical Implementation

The system is deliberately simple:

1. **Markdown files** live in `src/content/posts/`
2. **Gray Matter** parses the frontmatter
3. **Remark** converts markdown to HTML
4. **Next.js** serves it all up

The entire blog engine is about 100 lines of code. It's fast, reliable, and most importantly, it doesn't get in the way of writing.

## The Writing Experience

Now when I want to write, I just:

1. Open my text editor
2. Create a new `.md` file
3. Write
4. Save and commit

No login screens. No WYSIWYG editors fighting with my formatting. No "Save as Draft" buttons. Just writing.

## Performance Benefits

Static files are fast. Really fast. There's no database queries, no API calls, no client-side hydration of content. The browser gets HTML and CSS, exactly as Tim Berners-Lee intended.

Page load times are measured in milliseconds, not seconds. The entire site scores 100/100 on Lighthouse because there's simply less to go wrong.

## Ownership and Portability

Every post is a file I can see, touch, and move. If I decide to switch platforms tomorrow, I can take my entire blog with me. It's just a folder of markdown files.

This isn't just about technology - it's about longevity. I want my writing to exist in 20 years, regardless of what happens to any particular platform or company.

## The Trade-offs

Of course, there are trade-offs:

- No comments (though I'd argue this is a feature)
- No real-time collaboration
- No fancy block editors
- Manual deployment process

But for a personal blog, these aren't real limitations. They're conscious choices that prioritize writing over features.

## Looking Forward

As developers, we often overcomplicate things. We reach for complex solutions because they're interesting, not because they're necessary. 

Sometimes the best solution is the simplest one. Sometimes a folder of text files is all you need.

## Conclusion

If you're thinking about starting a blog in 2025, consider going back to basics. You might find, as I did, that the best writing system is barely a system at all.

Just words in files. Nothing more, nothing less.