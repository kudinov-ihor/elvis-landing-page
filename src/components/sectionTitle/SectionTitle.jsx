import React from 'react';
import './title.scss';
import {motion} from 'framer-motion';

function SectionTitle({title}) {

  const titleAnimate = {
    offscreen: {
      opacity: 0,
      x: -50
    },
    onscreen: {
      opacity: 1,
      x: 0, 
      transition: {
        type: 'spring',
        bounce: 0.7
      }
    }
  }

  return (
    <div className="section-header">
        <motion.h2
          className="section-header__title"
          variants={titleAnimate}
          initial='offscreen'
          whileInView='onscreen'
          viewport={{once: true, amount: 0.7}}
        >
          {title}
        </motion.h2>
    </div>
  )
}

export default SectionTitle