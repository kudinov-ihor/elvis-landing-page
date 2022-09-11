import React from 'react';
import {motion} from 'framer-motion';
import './promo.scss';

import PromoPhoto from '../../assets/images/promo-hero.png';

function Promo() {

  const textAnimate = {
    offscreen: {
      opacity: 0,
      scale: 0
    },
    onscreen: {
      opacity: 1,
      scale: 1,  
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1
      }
    }

  }

  const imageAnimate = {
    offscreen: {
      opacity:0,
      x: -500
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1
      }
    }
  }

  return (
    <section className='promo'>
        <motion.div
          initial='offscreen'
          animate='onscreen'        
          transition={{staggerChildren:0.5}} 
          className="container container_flex"
        >
            <motion.h1 
              className="promo__title"
              variants={textAnimate}

            >
              elvis
            </motion.h1>
            <motion.img
              src={PromoPhoto}
              alt="elvis photo" 
              className="promo__photo"
              variants={imageAnimate}

            />
        </motion.div>

    </section>
  )
}

export default Promo