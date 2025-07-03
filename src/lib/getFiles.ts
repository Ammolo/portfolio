import fs from 'fs'
import path from 'path'

/** Definition for the path from the root working directory */
const photoDir = 'public/images'
const postDir = 'src/content'

import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' })
}

/**
 * 
 * A function to get the post name slugs
 * 
*/
export function getPosts() {
    
    const fileNames = fs.readdirSync(getFilenames(postDir))
    
    /** Filters out the file names for the mdx files */
    const postData = fileNames.map(file => {
        const slug = file.replace(/\.mdx$/, '')
        
        return {slug};
    })
    
    /** need to somehow get all the metadata plus thumbnails for the files */
    /** Returns an array of the filenames that will be utilized as the slug for the pages */
    return postData;
}

/** get the filenames within a directory
 * 
 *  dir - string with the directory path from root
 * 
 */
function getFilenames(dir:string){
    return path.join(process.cwd(), dir)
}