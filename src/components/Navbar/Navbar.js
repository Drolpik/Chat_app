import SignOut from './SignOut/SignOut';
import { auth } from '../../firebase/config';
import classes from './Navbar.module.scss';
import ToggleTheme from './ToggleTheme/ToggleTheme';

const Navbar = (props) => {
  const { burgerStatus, darkMode } = props;

  const burgerStatusClass = burgerStatus ? classes.ToggleBurger : null;
  const darkModeClass = darkMode ? classes.Dark : classes.Light;
  const user = auth.currentUser;

  return (
    <div className={[classes.Container, burgerStatusClass, darkModeClass].join(' ')}>
      <div className={classes.Header}>
        <h1>React Devs</h1>
        <img src={user.photoURL} alt="user_photo" />
        <p>{user.displayName}</p>
      </div>
      <ToggleTheme />
      <SignOut darkMode={darkMode} />
    </div>
  );
};

export default Navbar;
