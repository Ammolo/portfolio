/** Main page for my galley
 * 
 * Should Support colelctions and sorting of my photographs
 * As well assoem of my best photos should be displayed around the webpage
 * 
 * How should these photos be stored?
 * 
 * 
 * TODO:
 * 
 * - Auto Import all Photos
 * - Evenly space Photo
 * - Create a category menu on teh left side that floats with the webpage
 * - round the edges of the photos and space evenly
 * - would be cool to integrate a asymetrical fill algorithm for a unique look
 * - click on photo to displaya high res photo
 * - Nextjs supports for remote images eventually i would need to upload it to some database prehaps my own maybe eventually when i scale up 
 */

/** Photoswipe gallery import */
import 'photoswipe/dist/photoswipe.css'

/** PhotoGallery Component */
import PhotoGallery from '../../components/gallery'
import GalleryView from '../../components/galView';

import getGallery from '@/lib/getGallery';
import { GalleryImages } from '@/lib/types/cloudinary';

export default async function Page() {     
  const results: GalleryImages = await getGallery();

    return (
      <PhotoGallery images={results.images}/>      
    )
  }