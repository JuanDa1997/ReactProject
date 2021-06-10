import React, { useState, useEffect } from 'react';
import fire from './fire';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Body from './components/Body';
import '../css/App.css';

function App() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('false');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .aunth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disable":
          case "auth/user-not-found":
            setEmailError(err.message);
            break
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSingup = () => {
    clearErrors();
    fire
      .aunth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-alredy-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {

  });

  return (
    <div id="App" >
      <Header />
      <Body />
      <Footer />
      {/* <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin} 
        handleSingup={handleSingup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      /> */}
    </div>
  );
}

export default App;
