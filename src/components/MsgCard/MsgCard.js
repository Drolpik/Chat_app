import { auth } from '../../firebase/config';
import classes from './MsgCard.module.scss';

const MsgCard = (props) => {
  const { message: { text, uid, photoURL } } = props;

  const messageClass = uid === auth.currentUser.uid ? classes.Sent : classes.Received;

  return (
    <div className={[classes.Container, messageClass].join(' ')}>
      <img src={photoURL} alt="user_photo" />
      <p>{text}</p>
    </div>
  );
};

export default MsgCard;
