import fs from 'fs'
import path from 'path'

/** Definition for the path from the root working directory */
const postDir = '/content'

/**
 * 
 * Function to find all the MDX files within the content folder
 * Returns the slug
 * 
*/
export async function getPosts() {

    const fileNames = fs.readdirSync(getFilenames(postDir))
    
    /** Filters out the file names for the mdx files */
    const postData = fileNames.map(file => {
        const slug = file.replace(/\.mdx$/, '')
        const title = slug
        
        return {slug, title};
    })
    
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