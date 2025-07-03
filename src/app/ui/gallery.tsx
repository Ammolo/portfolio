'use client'

import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

import { GalleryImages, CloudinaryImage } from '@/lib/types/cloudinary'
  
import { useState } from 'react'




  /** Function To create a gallery for the galey page
   * 
   * photos are rendered and generated from the public images folder for now
   * change to gallery folder
   * 
   * TODO:
   * auto import all the file names for dynamic imports to the gallery
   * 
   * 
   */
export default function PhotoGallery( {images}: GalleryImages) {     
  
  const [layout, setLayout] = useState<'grid' | 'mosaic'>('mosaic');

  // Used to just repeate the images
  const repeatedImages = Array(8)
    .fill(images)
    .flat()
    .map((img, index) => ({ ...img, id: index }));

    return (
      <div className='w-full m-auto bg-amber-300'>
      
      {/* Content Changer Banner */}
        <div className=' bg-cyan-900 flex gap-2 p-2 h-23 w-full'>

          <p>Current Value: {layout}</p>
          {/* Find or create some icons for these */}
          <button className=' bg-teal-800 h-12 w-12 rounded p-1 hover:bg-teal-900 float-end' onClick={() => setLayout('mosaic')}>M</button>
          <button className=' bg-teal-800 h-12 w-12 rounded p-1 hover:bg-teal-900 float-end' onClick={() => setLayout('grid')}>G</button>
        
        </div>
        
        <Gallery>
          <div className={
            
            `grid gap-2 p-2
            ${ layout === 'mosaic'  
            ? 'grid-cols-2 sm:grid-cols-2 md:grid-cols-5 first:bg-green-500'  
            : 'grid-cols-1'}`}>
              
            {/* Createing a item for each of the photos from the result */}
            
            {repeatedImages.map((img, index) => (
              <div>
                
                <Item
                  key={index}
                  original={img.secure_url}
                  thumbnail={img.secure_url}
                  width={img.width}
                  height={img.height}
                >
                  {({ ref, open }) => (
                    <img
                    ref={ref}
                    onClick={open}
                    src={img.secure_url}
  
                    // A bit exxessive hover transisiton
                    className="w-full h-full object-cover cursor-pointer shadow transition-transform hover:scale-102 duration-200 "
                    alt={`Image ${index + 1}`}
                    />
                  )}
                </Item>
              </div>
              
            ))}  
          </div>  
        </Gallery>    
      </div>
    )
}