import React, { useState, useEffect } from 'react';
import Login from './Login';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() =>{
    const temp = localStorage.getItem('isLoggedIn');
    if(temp === '1') {
      setIsLoggedIn(true);
    }
  },[]);
 
  const loginHandler =  async (email, password) =>  {
    await fetch('https://crmdevapi.seventech.co/api/auth/login', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({
          "email":email,
          "password":password,
          "location":{}
      })
    }).then(response => response.json())
    .then(data => {
      if(data.status === 200){
        localStorage.setItem('isLoggedIn','1');
        localStorage.setItem('username',data.username);
        setIsLoggedIn(true);
        toast.success("Login successful");
      }
      else{
        toast.error(data.message);
        return;
      }
    })
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  };

  return (
    <React.Fragment>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;