import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/config';
import './App.scss';
import ChatRoom from './components/ChatRoom/ChatRoom';
import SignIn from './components/SignIn/SignIn';
import ThemeProvider from './context/ThemeContext';

function App() {
  const [user] = useAuthState(auth);

  return (
    <ThemeProvider>
      <div className="App">
        {user ? <ChatRoom /> : <SignIn />}
      </div>
    </ThemeProvider>
  );
}

export default App;
