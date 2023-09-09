import React, { useState, useContext } from 'react';

import storage from '../utils/storage';

const ThemeContext = React.createContext();

function ThemeProvider ({ children }) {
  const [theme, changeTheme] = useState(storage('NTTtheme', 'blue'));

  function setTheme (color) {
    localStorage.setItem('NTTtheme', color);
    setTheme(color);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  );
};

function useTheme () {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme }