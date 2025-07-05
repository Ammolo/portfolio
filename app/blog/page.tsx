import { getPosts } from "@/lib/files"
import PostCard from "@/components/postCards"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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
     * 
     */
    const posts = await getPosts()

    return (
    <div className="w-full max-w-7xl">
      <div>
        <h1>Blog</h1>
        <p>Insights on the topics that interests me.</p>
      </div>
      {/** Generating all the blog post cards */}
      <div className="w-full max-w-7xl">
        {/* <div className="flex flex-col sm:flex-row gap-4  mx-auto">

          <Input/>
          <Button>Category 1</Button>
          <Button>Category 2</Button>
          <Button>Category 3</Button>
          <Button>Category 3</Button>
          <Button>Category 3</Button>
        </div> */}
        <h1 className="font-bold text-3xl p-4">My Articles</h1>
        <div className='grid gap-6 m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid:md-3'>
          {posts.map(post=> (
              <PostCard key={post} post={post}/>
          ))}
        </div>
    
      </div>
    </div>
  )

}