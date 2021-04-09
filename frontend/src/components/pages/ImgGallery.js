  
import React from 'react';
import Gallery from '../Gallery';
import SimpleReactLightbox from 'simple-react-lightbox';

function ImgGallery() {
    return (
        <div id="gallery">
        <SimpleReactLightbox>
			<Gallery />
		</SimpleReactLightbox>
        </div>
    )
}

export default ImgGallery