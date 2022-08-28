import React from 'react';
import './footer.scss';

import Logo from '../../assets/images/logo.svg';

function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer-wrapper">
                <img src={Logo} alt="elvis autograph" />
                <div className="news">
                    <h2 className="news__title">new's letter</h2>
                    <span className="news__descr">get Daily update’s about events, product amd more</span>
                    <form action="" className="form">
                        <input type="text" className='form__input' placeholder='Enter Your Email'/>
                        <input type="submit" className='form__submit' placeholder='Submit'/>
                    </form>
                    <h3 className="news__contact">reach us</h3>
                    <span className="news__mail">kudinov.igor98@gmail.com</span>
                    <span className="news__location">Ternopil, Ukraine</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer