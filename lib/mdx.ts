import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post } from './types'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts(): Post[] {
  try {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.warn('Posts directory does not exist')
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug,
          ...(data as Omit<Post, 'slug'>),
        }
      })

    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      image: data.image,
      readTime: data.readTime,
      categories: data.categories,
      author: data.author,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
} 