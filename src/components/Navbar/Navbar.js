import SignOut from '../SignOut/SignOut';
import { auth } from '../../firebase/config';
import classes from './Navbar.module.scss';

const Navbar = () => {
  const user = auth.currentUser;

  return (
    <div className={classes.Container}>
      <div className={classes.Header}>
        <h1>Chat name</h1>
        <img src={user.photoURL} alt="user_photo" />
        <p>{user.displayName}</p>
      </div>
      <SignOut />
    </div>
  );
};

export default Navbar;
