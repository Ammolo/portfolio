import cloudinary from "cloudinary";

/**
 * 
 * Configures Cloudinary SDK
 * 
 * Exported for reuse
 *  
 */
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
  
  export default cloudinary;