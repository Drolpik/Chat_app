import TypeWriterEffect from 'react-typewriter-effect';
import { auth, GoogleProvider } from '../../firebase/config';
import classes from './SignIn.module.scss';
import signinImg from '../../assets/chat.svg';
import googleLogo from '../../assets/google.svg';

const SignIn = () => {
  const signInWithGoogle = () => {
    auth.signInWithPopup(GoogleProvider);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.LeftSide}>
        <img src={signinImg} alt="chat" />
        <div className={classes.TypeText}>
          <TypeWriterEffect
            textStyle={{ fontFamily: 'Roboto Slab, serif', color: '#ffffff' }}
            startDelay={1000}
            nextTextDelay={1000}
            typeSpeed={100}
            multiText={[
              'Login and get started!',
              'Start chatting now!',
            ]}
            cursorColor="#3F3D56"
          />
        </div>
      </div>
      <div className={classes.SignInContent}>
        <h1>Sign in</h1>
        <button type="button" className={[classes.GoogleBtn, classes.LoginBtn].join(' ')} onClick={signInWithGoogle} alt="google-btn">
          <img src={googleLogo} alt="google-logo" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
