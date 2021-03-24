import { useState } from 'react';
import { auth } from '../../firebase/config';
import firebase from '../../firebase/config';
import classes from './MsgForm.module.scss';

const MsgForm = (props) => {
    const [formValue, setFormValue] = useState('');

    const sendMsg = async(event) => {
        event.preventDefault();
        const {uid, photoURL} = auth.currentUser;
        
        await props.messagesCollections.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        });
        setFormValue('');
    }

    return (
        <form onSubmit={sendMsg}>
            <input 
                className={classes.Input}
                value={formValue}
                onChange={(event) => setFormValue(event.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
}

export default MsgForm;