import { auth } from '../../../firebase/config';
import classes from './SignOut.module.scss';
import darkSignoutImg from '../../../assets/sign-out-dark.svg';
import lightSignoutImg from '../../../assets/sign-out-light.svg';

const SignOut = ({ darkMode }) => {
  const logout = () => (auth.currentUser && auth.signOut());

  return (
    <div className={classes.Container}>
      <button type="button" className={classes.LogOutBtn} onClick={logout}>
        <img src={darkMode ? darkSignoutImg : lightSignoutImg} alt="logout" />
        Sign out
      </button>
    </div>
  );
};

export default SignOut;
