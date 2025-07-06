import { getAllPosts } from '@/lib/markdown'
import WritingClient from './WritingClient'

export default async function WritingPage() {
  const posts = await getAllPosts()
  
  return <WritingClient posts={posts} />
}