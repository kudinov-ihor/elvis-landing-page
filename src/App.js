import React from 'react';
import { createContext, useState } from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import About from './components/about/About';
import History from './components/history/History';
import Gallery from './components/gallery/Gallery';
import ListenHits from './components/listenHits/ListenHits';
import Footer from './components/footer/Footer';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <Promo />
        <About />
        <History />
        <Gallery />
        <ListenHits />
        <Footer />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
