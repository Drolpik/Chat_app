import { useState } from 'react';
import firebase, { auth } from '../../../firebase/config';

import classes from './MsgForm.module.scss';
import sendImg from '../../../assets/sent-mail.svg';

const MsgForm = (props) => {
  const { messagesCollections, darkMode } = props;

  const [formValue, setFormValue] = useState('');

  const sendMsg = async (event) => {
    event.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messagesCollections.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue('');
  };

  const darkModeInputClass = darkMode ? classes.DarkInput : classes.LightInput;
  const darkModeBtnClass = darkMode ? classes.DarkBtn : classes.LightBtn;

  return (
    <div className={classes.Container}>
      <form onSubmit={sendMsg}>
        <input
          className={[classes.Input, darkModeInputClass].join(' ')}
          placeholder="Type here..."
          value={formValue}
          onChange={(event) => setFormValue(event.target.value)}
        />
        <button className={[classes.Button, darkModeBtnClass].join(' ')} type="submit">
          <img src={sendImg} alt="send" />
        </button>
      </form>
    </div>
  );
};

export default MsgForm;
