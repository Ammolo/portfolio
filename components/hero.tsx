'use client'

import { motion } from 'framer-motion';
import Image
 from 'next/image';

export default function Hero() {
  const imageUrl = null;
  return (
    <motion.section
      className="text-center space-y-6 py-20 flex flex-col items-center w-200 border-r dark:border-neutral-800 pr-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-32 h-32 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg bg-[#e26033]">
        <Image
            src={"/git-dark.png"}
            alt="Profile photo"
            width={200}
            height={200}
            className="object-cover w-full h-full"
        />
      </div>
      
      <div className='text-left'>
        <h1 className="text-3xl md:text-5xl font-bold">
        
        <p> Hello, </p>
        I'm <span className="text-[#40bdc9]">Ammar Mujezinović</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl pt-2 pb-4 p-4 pl-0">
        I'm a Computer Science graduate with a passion for development, mostly experienced in C and Python. 
        Currently diving into Next.js and modern web technologies. Outside of coding I enjoy photography and experementing with 3D printers and cad design. I'm always looking to expand my skills and learn more.
        </p>
    
      <div className="space-x-4">
        
        {/* Links for the different pages */}
        <a href="/developer" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-600">
          Github
        </a>
        
        <a href="/photography" className="inline-block bg-purple-500 text-white px-6 py-3 rounded-xl shadow hover:bg-purple-600">
          Linkedin
        </a>

      </div>

      </div>
    </motion.section>

  );
}
