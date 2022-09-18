import React from 'react';
import './listenHits.scss';
import {motion} from 'framer-motion';
import SectionTitle from '../sectionTitle/SectionTitle';

import HitsPhoto1 from '../../assets/images/hits/HitsPhoto1.png';
import HitsPhoto2 from '../../assets/images/hits/HitsPhoto2.png';

function ListenHits() {

  const imagesAnimate = {
    offscreen: {
      opacity:0,
      scale: 0
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 3
      }
    }

  }

  return (
    <div className='hits'>
        <div className="container">
            <SectionTitle title="Listen to the Greatest Hits" />
            <div className="hits-wrapper">
                <motion.img
                  variants={imagesAnimate}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={{once: false, amount: 0.5}} 
                  src={HitsPhoto1}
                  alt="Spotify photo song"
                  className='hits-wrapper__photo'
                />
                <motion.img
                  variants={imagesAnimate}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={{once: false, amount: 0.5}} 
                  src={HitsPhoto2}
                  alt="Sporify music search" 
                  className='hits-wrapper__photo'
                />
            </div>
        </div>
    </div>
  )
}

export default ListenHits