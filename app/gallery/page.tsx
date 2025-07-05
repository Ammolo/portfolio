/** 
 * 
 * Galley Main Page
 * 
 */

/** Photoswipe gallery import */
import 'photoswipe/dist/photoswipe.css'

/** PhotoGallery Component */
import PhotoGallery from '../../components/gallery'

import getGallery from '@/lib/gallery';
import { GalleryImages } from '@/lib/types/cloudinary';

export default async function Page() {     
  const results: GalleryImages = await getGallery();

    return (
      <PhotoGallery images={results.images}/>      
    )
  }