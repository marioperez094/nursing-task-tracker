import React, { useState, useContext } from 'react';

import storage from '../utils/storage';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(storage('NTTtheme', 'blue'));

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useThemeContext }