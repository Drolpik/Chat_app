import { useContext } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { ThemeContext } from '../../../context/ThemeContext';
import classes from './ToggleTheme.module.scss';

const ToggleTheme = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <DarkModeToggle className={classes.Style} onChange={toggleTheme} checked={darkMode} size={60} />
  );
};

export default ToggleTheme;
