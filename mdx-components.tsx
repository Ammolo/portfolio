/**
 * TSX - files containg fucntion used in the blog route 
 * SHould Get all the md files from the post folders
 * 
 */


/** Should be an async fucntion sine this should be done 
 * asynchronously because it takes time 
 * 
 * */
import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}
