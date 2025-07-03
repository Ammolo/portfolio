
/** Imports all the Posts
 * 
 * 
 * Should find a way to automate this instead of adding each post manually
 */
import { getPosts } from "@/lib/getFiles"

/**
 * 
 * Renders the currently requested post based on the slug parameter passed
 * imports it from the content folder
 * 
 * prehaps enable fucntion to import from different folders.
 * 
 */
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params

  const { default: Post } = await import(`@/content/${slug}.mdx`)
  return <Post />

}

/** Generates static parameters for nextjs 
 * 
 * Only containing the slugs
 * currently reduntant since get Posts only contains slugs
 * but for future reference
 * 
 */
export function generateStaticParams() {
  const posts = getPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export const dynamicParams = false