import { db } from '../../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import classes from './ChatRoom.module.scss';
import MsgCard from '../MsgCard/MsgCard';
import MsgForm from '../MsgForm/MsgForm';

const ChatRoom = ({ currentRoom }) => {
    const messagesCollections = db.collection('messages');
    const queryToDB = messagesCollections.orderBy('createdAt').limit(30);

    const [messages] = useCollectionData(queryToDB, {idField: 'id'});

    return(
        <div className={classes.Container}>
            <div>
                {messages && messages.map(msg => {
                    return(
                        <MsgCard 
                            key={msg.id} 
                            message={msg}
                        />
                    );
                })}
            </div>
            <MsgForm messagesCollections={messagesCollections} />
        </div>
    );
};

export default ChatRoom;