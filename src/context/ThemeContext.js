import { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
