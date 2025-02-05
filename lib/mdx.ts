import fs from 'fs/promises' // fs yerine fs.promises kullanıyoruz
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import { Post } from './types'

const rootDirectory = path.join(process.cwd(), 'content/blogs')

export async function getBlogBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = await fs.readFile(filePath, { encoding: 'utf8' }) // Artık async!

  const { data, content } = matter(fileContent)
  const { content: compiledContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      }
    }
  })

  return {
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    slug: realSlug,
    content: compiledContent,
    readTime: calculateReadingTime(content),
    image: data.image,
    categories: data.categories,
    author: data.author
  }
}

export async function getAllBlogPosts(): Promise<Post[]> {
  const files = await fs.readdir(rootDirectory) // Artık async!
  
  const posts = await Promise.all(
    files.map(async (file) => {
      const realSlug = file.replace(/\.mdx$/, '')
      const filePath = path.join(rootDirectory, file)
      const fileContent = await fs.readFile(filePath, { encoding: 'utf8' }) // Artık async!
      const { data, content } = matter(fileContent)

      const { content: compiledContent } = await compileMDX({
        source: content,
        options: {
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
      })

      return {
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        slug: realSlug,
        content: compiledContent,
        readTime: calculateReadingTime(content),
        image: data.image,
        categories: data.categories,
        author: data.author
      }
    })
  )

  return posts.sort((post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime())
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const numberOfWords = content.split(/\s/g).length
  const minutes = Math.ceil(numberOfWords / wordsPerMinute)
  return `${minutes} min read`
} 