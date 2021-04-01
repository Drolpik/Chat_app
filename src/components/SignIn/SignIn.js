import TypeWriterEffect from 'react-typewriter-effect';
import {
  auth, GoogleProvider, FacebookProvider, GithubProvider,
} from '../../firebase/config';
import classes from './SignIn.module.scss';
import signinImg from '../../assets/chat.svg';
import googleLogo from '../../assets/google.svg';
import facebookLogo from '../../assets/facebook.svg';
import githubLogo from '../../assets/github.svg';

const SignIn = () => {
  const signInWithGoogle = () => {
    auth.signInWithPopup(GoogleProvider);
  };

  const signInWithFacebook = () => {
    auth.signInWithPopup(FacebookProvider);
  };

  const signInWithGithub = () => {
    auth.signInWithPopup(GithubProvider);
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
        <button type="button" className={[classes.FacebookBtn, classes.LoginBtn].join(' ')} onClick={signInWithFacebook} alt="fb-btn">
          <img src={facebookLogo} alt="fb-logo" />
          Sign in with Facebook
        </button>
        <button type="button" className={[classes.GithubBtn, classes.LoginBtn].join(' ')} onClick={signInWithGithub} alt="github-btn">
          <img src={githubLogo} alt="github-logo" />
          Sign in with Github
        </button>
      </div>
    </div>
  );
};

export default SignIn;
