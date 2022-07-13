import React from 'react';

import './promo.scss';

import PromoPhoto from '../../assets/images/promo-hero.png';

function Promo() {
  return (
    <section className='promo'>
        <div className="container container_flex">
            <h1 className="promo__title">elvis</h1>
            <img src={PromoPhoto} alt="" className="promo__photo" />
        </div>

    </section>
  )
}

export default Promo