import {
  useRef, useEffect, useState, useContext,
} from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase/config';
import classes from './ChatRoom.module.scss';
import MsgCard from './MsgCard/MsgCard';
import MsgForm from './MsgForm/MsgForm';
import Navbar from '../Navbar/Navbar';
import Backdrop from '../Navbar/Backdrop/Backdrop';
import { ThemeContext } from '../../context/ThemeContext';

const ChatRoom = () => {
  const messagesCollections = db.collection('messages');
  const queryToDB = messagesCollections.orderBy('createdAt').limit(30);
  const [messages] = useCollectionData(queryToDB, { idField: 'id' });
  const lastMessage = useRef();

  useEffect(() => {
    lastMessage.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const [burger, switchBurger] = useState(false);
  const toggleBurger = () => switchBurger(!burger);
  const toggleClass = burger ? classes.Toggle : null;

  const { darkMode } = useContext(ThemeContext);

  const darkModeContainerClass = darkMode ? classes.DarkContainer : classes.LightContainer;
  const darkModeBurgerClass = darkMode ? classes.DarkBurger : classes.LightBurger;
  const darkModeMsgContainerClass = darkMode ? classes.DarkMsgContainer : classes.LightMsgContainer;

  return (
    <div className={[classes.Container, darkModeContainerClass].join(' ')}>
      <Backdrop show={burger} clicked={toggleBurger} />
      <Navbar burgerStatus={burger} darkMode={darkMode} />
      <div
        role="button"
        className={[classes.Burger, toggleClass, darkModeBurgerClass].join(' ')}
        onClick={toggleBurger}
      >
        <div className={classes.Line1} />
        <div className={classes.Line2} />
        <div className={classes.Line3} />
      </div>
      <div className={classes.Content}>
        <div className={[classes.MsgContainer, darkModeMsgContainerClass].join(' ')}>
          {messages
            && messages.map((msg) => <MsgCard key={msg.id} message={msg} darkMode={darkMode} />)}
          <div ref={lastMessage} />
        </div>
        <MsgForm messagesCollections={messagesCollections} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default ChatRoom;
