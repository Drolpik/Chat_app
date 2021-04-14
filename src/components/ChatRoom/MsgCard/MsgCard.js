import { auth } from '../../../firebase/config';
import classes from './MsgCard.module.scss';

const MsgCard = (props) => {
  const { message: { text, uid, photoURL }, darkMode } = props;

  const messageStatus = uid === auth.currentUser.uid ? 'Sent' : 'Received';
  let messageClass;

  if (messageStatus === 'Sent') {
    messageClass = darkMode ? classes.DarkSent : classes.LightSent;
  } else if (messageStatus === 'Received') {
    messageClass = darkMode ? classes.DarkReceived : classes.LightReceived;
  }

  return (
    <div className={[classes.Container, messageClass].join(' ')}>
      <img src={photoURL} alt="user_photo" />
      <p>{text}</p>
    </div>
  );
};

export default MsgCard;
