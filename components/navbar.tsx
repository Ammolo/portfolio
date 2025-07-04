'use client'

import Link from 'next/link'
import Image from 'next/image'
import { routes } from '@/lib/routes'
import { useState } from 'react'
import { motion, AnimatePresence, MotionConfig, usePresenceData } from 'framer-motion'

/** 
 * 
 * Dynamic Navbar Component that is used across all pages
 * 
 */
export default function Navbar() {
    
    /** Usestate for dropdown menu state */
    const [open, setOpen] = useState(false);

    return (
        <div className='m-6 '>
            <div className='bg-accent flex justify-between rounded-xl items-center'>
                
                <Image
                    src={"/git-dark.png"}
                    alt=''
                    width={50}
                    height={50}>
                </Image>

                <motion.button
                    initial={false }
                    onClick={() => setOpen(!open)}
                    className="relative w-8 h-8 flex flex-col justify-center items-center"
                    >
                    
                    {/* Line 1 */}
                    <motion.span
                        initial={false}
                        animate={{
                            rotate: open ? 45 : 0,
                            y: open ? 8 : -8,
                        }}
                        className="absolute w-6 h-0.5 bg-background rounded origin-center"
                        transition={{ duration: 0.3 }}
                        />
                    
                    {/* Line 2 */}
                    <motion.span
                        initial={false}
                        animate={{
                            opacity: open ? 0 : 1,
                        }}
                        className="absolute w-6 h-0.5 bg-background rounded"
                        transition={{ duration: 0.2 }}
                        />
                    {/* Line 3 */}
                    <motion.span
                        initial={false}
                        animate={{
                            rotate: open ? -45 : 0,
                            y: open ? -8 : 8,
                        }}
                        className="absolute w-6 h-0.5 bg-black rounded origin-center"
                        transition={{ duration: 0.3 }}
                        />
                </motion.button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div 
                    className='absolute right-6 left-6 p-2 bg-accent overflow-hidden' 
                    exit={{ opacity: 0 }}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    >
                        <div className='w-full grid gap-2'>
                            {/* <div className='w-full hover:bg-accent'> */}
                            {/** creates a link from each of the routes in route.ts */}
                            {routes.map(route => (
                                <div className='hover:bg-accent p-2 text-left'>
                                    <Link onClick={() => setOpen(false)} href={route.path}>{route.name}</Link>
                                </div>
                            ))}

                        </div>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
