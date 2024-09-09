import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPic from './assets/main.webp'
import './App.css';
import { useState } from 'react';


function App() {
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSignIn = () => {
    setShowSignIn(true);
  };

  const closeSignIn = () => {
    setShowSignIn(false);
  };

  return (
    <div className="App">
      <Navbar onSignInClick={toggleSignIn} />

      {showSignIn && <SignIn closeSignIn={closeSignIn} />}

      <div className='flex'>
        <div className='h-100 w-5 border'>ll</div>
        <div className='w-90 border flex'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold'>Human Stories & Ideas</h1>
            <p>A place to read, write, and deepen your understanding</p>
          </div>
          <img src={MainPic} alt="" className='w-80 h-90 object-contain'/>
        </div>
        <div className='w-5 border'>kk</div>
      </div>

      <Footer />
    </div>
  );
}

export default App;