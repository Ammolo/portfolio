
/**
 * File for the UI element for each blog post
 * 
 */
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import Link from 'next/link'
 
export default async function PostCard({ post }: { post: any }) {    
    return (
        
        <Card className=" rounded-none ">
            <CardHeader>

            </CardHeader>

            <CardContent>
                <CardTitle>{post.slug}</CardTitle>
                <Link href={`/blog/${post.slug}`} className="">
                    
                    {/** Title and text Section */}
                    <div className="">
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus sollicitudin neque eu congue. 
                            Sed sollicitudin felis sed lectus finibus tincidunt. Fusce molestie, mi id volutpat ultrices,
                            ligula ligula aliquet tortor, in interdum</p>  
                    </div>
                
                </Link>

                <CardDescription>
                    So this is a description for some reason?
                </CardDescription>
            </CardContent>
        </Card>
  )
}