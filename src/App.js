import { auth } from './firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.scss';
import ChatRoom from './components/ChatRoom/ChatRoom';
import SignIn from './components/SignIn/SignIn';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? <ChatRoom /> : <SignIn />}
    </div>
  );
}

export default App;
