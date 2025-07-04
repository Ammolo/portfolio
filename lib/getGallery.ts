import cloudinary from "./configs/cloudinary";

import type { CloudinaryImage, GalleryImages} from '@/lib/types/cloudinary';

/** 
 * Function To retrieve metadata of the photos in the configured cloudinary folder
 * 
 * TODO: 
 *      Implement Error Handling
 *      Implement Photo Caching
 *      Prehaps Implement blurDataUrl
 *      Figure out a logical way setting the max results per page basis?
 * 
 * 
 */
export default async function getGallery(): Promise<GalleryImages>{
    
    /** Fetches the photos within the given folder in the cloudinary account */
    const fetchedResults = await cloudinary.v2.search
        .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
        .max_results(100)
        .execute();
    
    let filteredResults: CloudinaryImage[] = mapResults(fetchedResults.resources);
    
    let galProp: GalleryImages = { images: filteredResults}

    /** returns the results as Gallery Props */
    return galProp
}

/** 
 * Maps the JSON object over to the CloudinaryImage Type
 * 
 * @returns CloudinaryImage[ ]
 * 
 * Is the json any type the best practice for this??
 * 
 */
function mapResults(json: any[]): CloudinaryImage[] {
    return json.map((item) => ({
        secure_url: item.secure_url,
        width: item.width,
        height: item.height,
        format: item.format,
        filename: item.filename,
        folder: item.asset_folder,
      }));
}