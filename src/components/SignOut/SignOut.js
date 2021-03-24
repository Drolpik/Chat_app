import { auth } from '../../firebase/config';
import classes from './SignOut.module.scss';

const SignOut = () => {
    const logout = () => {
        auth.currentUser && auth.signOut();
    }

    return(
        <button
            className={classes.LogOutBtn} 
            onClick={logout} >
            SignOut
        </button>
    );
}

export default SignOut;