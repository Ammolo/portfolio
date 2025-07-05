
/** Imports all the Posts
 * 
 * 
 */
import { getPosts } from "@/lib/files"

interface PageProps {
  params: {
    slug: string;
  };
}

/**
 * 
 * Renders the currently requested post based on the slug parameter passed
 * imports it from the content folder
 * 
 * prehaps enable fucntion to import from different folders.
 * 
 */
export default async function Page({ params }: PageProps) {
  const { slug } = params

  const { default: Post } = await import(`@/content/${slug}.mdx`)
  return <Post />

}

/** Generates static parameters for nextjs 
 * 
 * Only containing the slugs
 * Currently reduntant since get Posts only contains slugs
 * but for future reference
 * 
 */
export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export const dynamicParams = false