import React, { useState } from 'react';
import './Login.css'

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(email, password);
  };

  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <div className="shadow p-3 mb-5 rounded">
            <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" name="email" id="email" autoComplete="off" onChange={(e)=> setEmail(e.target.value)}/>
            <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}/>
            <button className="btn btn-primary" type="submit">Login</button>
        </div>
      </form>
      </div>
  );
};

export default Login;