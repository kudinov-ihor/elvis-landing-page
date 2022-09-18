import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {motion} from 'framer-motion';
import './gallery.scss';
import SectionTitle from '../sectionTitle/SectionTitle';

import GalleryPhoto1 from '../../assets/images/gallery/GalleryPhoto1.png';
function Gallery() {


  const sliderAnimate = {
    offscreen: {
        opacity: 0,
        scale: 0
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 2
        }
    }
  }



  return (
    <div className='gallery'>
      <div className="container">
        <SectionTitle title="Gallery"/>
        <motion.div
                variants={sliderAnimate}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{once: false, amount: 0.3}} 
            >
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
        </motion.div>

      </div>
    </div>
  )
}

export default Gallery