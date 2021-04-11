import React, { useEffect, useState } from 'react';
import '../App.css'
import './Gallery.css'
import { images } from './data/ImageData'
import { SRLWrapper } from 'simple-react-lightbox';

function Gallery() {
	const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			setFilteredImages(images);
		},
		[tag]
	);

	return (
		<div className="App">
			<div className='container gallery--header'>
				<h1>Photo Gallery</h1>
				<h3>Click on one of the images to start lightbox effect</h3>
			</div>
			<SRLWrapper>
				<div className="container--gallery">
					{filteredImages.map(image => (
						<div key={image.id} className="image-card">
							<a href={`/images/gallery/${image.imageName}`}>
								<img className="image" src={`/images/gallery/${image.imageName}`} alt="" />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
		</div>
	);
}

export default Gallery;