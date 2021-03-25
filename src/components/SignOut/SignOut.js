import { auth } from '../../firebase/config';
import classes from './SignOut.module.scss';
import signoutImg from '../../assets/sign-out.svg';

const SignOut = () => {
    const logout = () => {
        auth.currentUser && auth.signOut();
    }

    return(
        <div className={classes.Container}>
            <button
                className={classes.LogOutBtn}
                onClick={logout} >
                <img src={signoutImg} alt="logout" />
                Sign out
            </button>
        </div>
    );
}

export default SignOut;