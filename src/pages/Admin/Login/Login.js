import React from 'react';
import './Login.scss';

function Login() {
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(e.target[0].value);
  }
  return (
    <div className="login-container">
      <h2>Login quiz</h2>
      <form onSubmit={handleSubmit} >
        <div>
          <input type="email" placeholder='Enter the email' />
        </div>
        <div>
          <input type="password" placeholder='Enter the password' />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
