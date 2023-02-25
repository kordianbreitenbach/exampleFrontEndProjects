
import React from 'react';
import Chat from './components/Chat';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SendMessage from './components/SendMessage';
import Navbar from './components/NavigationBar';

const style = {
  container: `max-w-[728px] 	  mx-auto text-center`,
  secContainer: `flex flex-col min-h-[80vh]  h-[100%] bg-green-100 mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className={style.container}>
      <section className={style.secContainer}>
        {/* Navbar */}
        <Navbar/>
        {user ? <Chat /> : null}
      </section>
      <SendMessage/>
    </div>
  );
}

export default App;