import React, { useEffect, useState } from 'react';
import '../App.css'
import './Gallery.css'
import {images} from './data/ImageData'
import { SRLWrapper } from 'simple-react-lightbox';

function Gallery() {
	const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	// useEffect(
	// 	() => {
	// 		tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
	// 	},
	// 	[tag]
	// );

    useEffect(
		() => {
			setFilteredImages(images);
		},
		[tag]
	);

	return (
		<div className="App">
			{/* <div className='container gallery-container'> */}
			<div className='container gallery--header'>
				<h1>Photo Gallery</h1>
			</div>
			{/* <div className="tags">
				<TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="new" tagActive={tag === 'new' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="free" tagActive={tag === 'free' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="pro" tagActive={tag === 'pro' ? true : false} handleSetTag={setTag} />
			</div> */}
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

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default Gallery;