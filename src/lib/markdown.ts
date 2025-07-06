import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')
const linksDirectory = path.join(process.cwd(), 'src/content/links')

export interface Post {
  slug: string
  title: string
  date: string
  category: string
  excerpt?: string
  content: string
  readingTime: string
}

export interface MonthlyLinks {
  month: string
  year: string
  content: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html)
      .process(content)
    
    const contentHtml = processedContent.toString()
    const stats = readingTime(content)
    
    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      category: data.category || 'essays',
      excerpt: data.excerpt,
      content: contentHtml,
      readingTime: Math.ceil(stats.minutes).toString()
    }
  } catch (error) {
    return null
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }
    
    const fileNames = fs.readdirSync(postsDirectory)
    const allPosts = await Promise.all(
      fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(async fileName => {
          const slug = fileName.replace(/\.md$/, '')
          return getPostBySlug(slug)
        })
    )
    
    return allPosts
      .filter((post): post is Post => post !== null)
      .sort((a, b) => (a.date > b.date ? -1 : 1))
  } catch (error) {
    return []
  }
}

export async function getMonthlyLinks(): Promise<MonthlyLinks[]> {
  try {
    if (!fs.existsSync(linksDirectory)) {
      fs.mkdirSync(linksDirectory, { recursive: true })
      return []
    }
    
    const fileNames = fs.readdirSync(linksDirectory)
    const monthlyLinks = await Promise.all(
      fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(async fileName => {
          const fullPath = path.join(linksDirectory, fileName)
          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const { data, content } = matter(fileContents)
          
          // Convert markdown content to HTML
          const processedContent = await remark()
            .use(html)
            .process(content)
          
          return {
            month: data.month || '',
            year: data.year || '',
            content: processedContent.toString()
          } as MonthlyLinks
        })
    )
    
    // Sort by year and month (newest first)
    return monthlyLinks.sort((a, b) => {
      const dateA = new Date(`${a.month} 1, ${a.year}`)
      const dateB = new Date(`${b.month} 1, ${b.year}`)
      return dateB.getTime() - dateA.getTime()
    })
  } catch (error) {
    return []
  }
}