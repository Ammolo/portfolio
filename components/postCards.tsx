import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
    } from "./ui/card"
    
    import Image from "next/image"
    import Link from 'next/link'
    
    import { BlogPostInfo } from "@/lib/types/blog-types"
    
/**
 * File for the UI element for each blog post
 * 
 */ 
export default function PostCard({ post }: { post: BlogPostInfo }) {
    return (
        
        <Card className="hover:shadow-lg shadow-accent transition-all duration-300 pt-0 overflow-hidden">
            <div className="overflow-hidden">
                <Image
                    src='https://placehold.co/640x480'
                    alt={post.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

                
            <CardContent>
                <CardTitle className="mb-2">{post.slug}</CardTitle>
                <Link href={`/blog/${post.slug}`} className="">
                    
                    {/** Title and text Section */}
                    <div className="">
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus sollicitudin neque eu congue. 
                            Sed sollicitudin felis sed lectus finibus tincidunt. Fusce molestie, mi id volutpat ultrices,
                            ligula ligula aliquet tortor, in interdum</p>  
                    </div>
                
                </Link>

                <CardDescription>
                    Desctiption
                </CardDescription>
            </CardContent>
        </Card>
  )
}