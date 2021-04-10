import React from 'react';
import Gallery from '../Gallery';
import SimpleReactLightbox from 'simple-react-lightbox';
import Footer from '../Footer';

function ImgGallery() {
    return (
        <div>
            <div id="gallery">
                <SimpleReactLightbox>
                    <Gallery />
                </SimpleReactLightbox>
            </div>
            <Footer />
        </div>
    )
}

export default ImgGallery