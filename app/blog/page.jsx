import { getPosts } from "@/lib/getFiles"
import PostCard from "@/app/ui/postCards"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


/**
 *  This function should render all the previews for the blog post
 * should use the component post
 * should display a thumbnail and header and maybe a recap of the blog contents
 * 
 */
export default async function Page() {
    
    /** get san array of all the posts
     * 
     * format
     * [{parameter: slug},]
     * for each element
     * s
     */
    const posts = await getPosts()

    return (
    <div className="w-full">
          
      {/** Generating all the blog post cards */}
      <h1 className="font-bold text-3xl p-4">Blog Posts</h1>
      <div className='grid gap-4 m-auto '>
          {posts.map(post=> (
              <PostCard key={post} post={post}/>
          ))}
      </div>
    
    </div>
  )

}