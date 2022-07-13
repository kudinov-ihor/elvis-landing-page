import React from 'react';

import './header.scss';

import Logo from '../../assets/images/logo.svg';
import LightThemeIcon from '../../assets/icons/header-light.svg';
import DarkThemeIcon from '../../assets/icons/header-dark.svg';

function Header({theme ,toggleTheme}) {
  return (
    <header className="header">
        <div className="container container_flex">
            <img src={Logo} alt="Elvis Autograph" />
            <ul className="header__nav">
                <li>
                    <a href="#" className="header__link">home</a>
                </li>
                <li>
                    <a href="#" className="header__link">music</a>
                </li>
                <li>
                    <a href="#" className="header__link">news</a>
                </li>
                <li>
                    <a href="#" className="header__link">playlist</a>
                </li>
            </ul>
            <button className="header__switcher" onClick={toggleTheme}>
                <img src={theme === 'light' ? LightThemeIcon : DarkThemeIcon}  alt="" />
            </button>
        </div>
    </header>
  )
}

export default Header