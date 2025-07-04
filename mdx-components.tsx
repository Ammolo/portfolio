/**
 * 
 * Used to create mdx components that are used for blog posts
 * 
 */
import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}
