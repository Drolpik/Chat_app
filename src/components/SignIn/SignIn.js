import { auth, GoogleProvider } from '../../firebase/config';
import classes from './SignIn.module.scss';

const SignIn = () => {
    const signInWithGoogle = () => {
        auth.signInWithPopup(GoogleProvider);
    }

    return (
        <div className={classes.Container}>
            <div>
                <h1>CHAT ROOM</h1>
            </div>
            <div className={classes.LoginBtns}>
                <h1>Hello, log in to use chat</h1>
                <button
                    className={classes.LogInBtn}
                    onClick={signInWithGoogle} >
                    SignIn with Google
                </button>
            </div>
        </div>
    );
};

export default SignIn;