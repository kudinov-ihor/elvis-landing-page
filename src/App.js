import React from 'react';
import { createContext, useState } from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import About from './components/about/About';
import History from './components/history/History';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('light');

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
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
