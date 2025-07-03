/** Cloudinary Image Type
 * 
 * Just for holding the data i need and discarding whats unnesacary
 * 
 * Currently Holds
 * 
 * 
 */
export type CloudinaryImage = {    
    /** secure url of the photo */
    secure_url: string;
    
    /** Photo Width and height in px */
    height: number;
    width: number;

    /** File Format of the file */
    format: string;
    
    filename: string;

    /** Folder The Photo Is in  */
    folder?: string;
};

export interface  GalleryImages {
    images: CloudinaryImage[];
};
  