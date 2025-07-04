/**
 * 
 * Footer component used as a static component across all pages
 * 
 */
import Link from "next/link"
import Image from "next/image";

export default function Footer() {
    return (
        <div className="bg-background text-foreground border-t dark:border-neutral-800 mt-4" >
            <div className="px-6 py-10 grid gap-8 grid-cols-2 ">
                
                {/* Column 1 */}
                <div className="col-span-2 ">
                    <h3 className="text-lg font-semibold mb-4 col-span-3">About Me</h3>
                    
                    <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    In cursus sollicitudin neque eu congue. Sed sollicitudin 
                    felis sed lectus finibus tincidunt. Fusce molestie, mi id 
                    volutpat ultrices, ligula ligula aliquet tortor, in interdum 
                    </p>
                </div>

                {/* Column 2 Links */}
                <div className="">
                    <h3 className="text-lg font-semibold mb-4">Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
                        <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contact Me</Link></li>
                    </ul>
                </div>

                {/* Column 3 Contact */}
                <div className="">
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="" className="hover:underline flex">Contact Me Here</a></li>
                        </ul>
                </div>

                {/* Column 4 My Links */}
                <div className="">
                    <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <a href="" className="hover:underline flex gap-2">
                                
                                <Image
                                    src="/git-dark.png"
                                    alt="Github Logo"
                                    width={25}
                                    height={25}
                                    className="dark block:hidden"/>

                                <Image
                                    src="/git-dark.png"
                                    alt="Github Logo"
                                    width={25}
                                    height={25}
                                    className="block dark:hidden"/>

                                <span className="hidden md:inline">Github</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline flex gap-2">
                                <Image
                                    src="/InBug-Black.png"
                                    alt="Github Logo"
                                    width={25}
                                    height={25}
                                    className="block dark:hidden"
                            />
                            <Image
                                    src="/InBug-White.png"
                                    alt="Linked In Logo"
                                    width={25}
                                    height={25}
                                    className="dark block:hidden"
                            />
                                <span className="hidden md:inline">Linkedin</span>
                            </a>
                        </li>
                    </ul>
                </div>


            {/* Bottom copyright */}

            </div>
            <div className="text-center text-xs text-muted-foreground py-4 border-t border-neutral-800 mt-8">
                &copy; {new Date().getFullYear()} Ammar Mujezinovic. All rights reserved.
            </div>
        </div>
    )
}