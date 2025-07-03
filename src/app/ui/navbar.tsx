/** 
 * 
 * Component used as the navbar across all sites
 * 
 * TODO:
 *  Figure out a clean design for the bar
 *  Maybe a circular floating in the middle
 *  or just classical top navigation
 *  maybe a clean side navbar or something similar?
 */

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './themeSwitcher'

export default function Navbar() {
    return (
        <div className="flex justify-center p-4">
            <div className='grid gap-4 grid-cols-7'>
                <Button asChild>
                    <Link href="/">Home</Link>
                </Button>

                <Button asChild>
                    <Link href="/development">Development</Link>
                </Button>
                
                <Button asChild>
                    <Link href="/gallery">Gallery</Link>
                </Button>
                
                <Button asChild>
                    <Link href="/blog">Blog</Link>
                </Button>
                
                <Button asChild>
                    <Link href="/contact">Contact Me</Link>
                </Button>
                <div className=''>
                    <ModeToggle/>
                </div>
            </div>
        </div>
    )
}
