import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './gallery.scss';
import SectionTitle from '../sectionTitle/SectionTitle';

import GalleryPhoto1 from '../../assets/images/gallery/GalleryPhoto1.png';
function Gallery() {
  return (
    <div className='gallery'>
      <div className="container">
        <SectionTitle title="Gallery"/>
        <Carousel 
          controls={false} 
          indicators={false} 
          interval={3000}
          className="gallery__carousel"
          >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={GalleryPhoto1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={GalleryPhoto1}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
  )
}

export default Gallery