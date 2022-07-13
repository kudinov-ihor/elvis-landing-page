import React from 'react';
import { createContext, useState } from "react";
import ReactSwith from 'react-switch';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


import Header from './components/header/Header';
import Promo from './components/promo/Promo';


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
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
