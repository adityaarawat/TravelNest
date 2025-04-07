import React from 'react'
import LightGallery from 'lightgallery/react';

import './Css/Gallery.css'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const GalleryComp = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
  return (
    <div className='max-w-7xl mx-auto mb-16 px-4 md:px-0 mt-10'>
        <div className=''>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif'>
                Our Gallery
            </h2>
            <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10'/>
        </div>

        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="/India.jpg">
                    <img alt="img1" src="/uk01.jpg" />
                </a>
                <a href="/Hero1.jpg">
                    <img alt="img2" src="/uk02.jpg" />
                </a>
                <a href="/Hero2.jpg">
                    <img alt="img2" src="/uk03.jpg" />
                </a>
                <a href="/Hero3.jpg">
                    <img alt="img2" src="/uk04.jpg" />
                </a>
                <a href="/Hero4.jpg">
                    <img alt="img2" src="/uk05.jpg" />
                </a>
                <a href="/Bali.jpg">
                    <img alt="img2" src="/uk06.jpg" />
                </a>
                <a href="/Venice.jpg">
                    <img alt="img2" src="/uk07.jpg" />
                </a>
                <a href="/Paris.jpg">
                    <img alt="img2" src="/uk08.jpg" />
                </a>
                <a href="/Tokyo.jpg">
                    <img alt="img2" src="/uk09.jpg" />
                </a>
            </LightGallery>
        </div>
    </div>
  )
}

export default GalleryComp
