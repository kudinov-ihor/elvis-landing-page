import React from 'react';
import './listenHits.scss';

import SectionTitle from '../sectionTitle/SectionTitle';

import HitsPhoto1 from '../../assets/images/hits/HitsPhoto1.png';
import HitsPhoto2 from '../../assets/images/hits/HitsPhoto2.png';

function ListenHits() {
  return (
    <div className='hits'>
        <div className="container">
            <SectionTitle title="Listen to the Greatest Hits" />
            <div className="hits-wrapper">
                <img src={HitsPhoto1} alt="Spotify photo song"  className='hits-wrapper__photo'/>
                <img src={HitsPhoto2} alt="Sporify music search" className='hits-wrapper__photo' />
            </div>
        </div>
    </div>
  )
}

export default ListenHits