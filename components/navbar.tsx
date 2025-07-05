'use client'

import Link from 'next/link'
import Image from 'next/image'
import { routes } from '@/lib/configs/routes'
import { useState } from 'react'
import { motion, AnimatePresence, MotionConfig, usePresenceData } from 'framer-motion'
import { Button } from './ui/button'
import { ModeToggle } from './themeSwitcher'

/** 
 * 
 * Dynamic Navbar Component that is used across all pages
 * 
 */
export default function Navbar() {
    
    /** Usestate for dropdown menu state */
    const [open, setOpen] = useState(false);

    return (
        <div className="">
            <div className="bg-background flex justify-between items-center border-b border-accent p-3">
                <Image
                    src={"/git-dark.png"}
                    alt=""
                    width={50}
                    height={50}>
                </Image>

                <motion.button
                    initial={false }
                    onClick={() => setOpen(!open)}
                    className="relative w-8 h-8 flex flex-col justify-center items-center md:hidden"
                    >
                    
                    {/* Line 1 */}
                    <motion.span
                        initial={false}
                        animate={{
                            rotate: open ? 45 : 0,
                            y: open ? 8 : -8,
                        }}
                        className="absolute w-6 h-0.5 bg-accent rounded origin-center"
                        transition={{ duration: 0.3 }}
                        />
                    
                    {/* Line 2 */}
                    <motion.span
                        initial={false}
                        animate={{
                            opacity: open ? 0 : 1,
                        }}
                        className="absolute w-6 h-0.5 bg-accent rounded"
                        transition={{ duration: 0.2 }}
                        />
                        
                    {/* Line 3 */}
                    <motion.span
                        initial={false}
                        animate={{
                            rotate: open ? -45 : 0,
                            y: open ? -8 : 8,
                        }}
                        className="absolute w-6 h-0.5 bg-accent rounded origin-center"
                        transition={{ duration: 0.3 }}
                        />
                </motion.button>
                
                {/* Desktop Navbar */}
                <div className="hidden md:flex items-center gap-4">
                    {routes.map(route => (
                        <Button key={route.path} variant={'ghost'} asChild>
                            <Link href={route.path}>{route.id}</Link>
                        </Button>
                    ))}
                    <ModeToggle/>
                </div>
                    
            </div>

            {/* Phone Navbar */}
            <AnimatePresence>
                {open && (
                    <motion.div 
                    className="absolute right-0 left-0 p-2 bg-accent/95 overflow-hidden rounded-b-lg "
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    >
                        <div className="w-full flex flex-col gap-2">
                            {/* <div className='w-full hover:bg-accent'> */}
                            {/** creates a link from each of the routes in route.ts */}
                            {routes.map(route => (
                                <div className="hover:bg-accent p-2 text-left">
                                    <Link onClick={() => setOpen(false)} href={route.path}>{route.id}</Link>
                                </div>
                            ))}

                        </div>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
