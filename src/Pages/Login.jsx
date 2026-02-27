import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';
import Loginimage from './login&signupimg/loginimg.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Function to send the login data to the server
  const login = async (formData) => {
    let dataObj;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => { dataObj = data });

    if (dataObj?.success) {
      localStorage.setItem('auth-token', dataObj.token);
      window.location.replace("/");
    } else {
      alert(dataObj.errors);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const formData = { email, password };
      login(formData);  // Call the login function here to send data to the backend
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-left">
        <img src={Loginimage} alt="Login_image" />
      </div>
      <div className="loginsignup-right">
        <form className="loginsignup-container" onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <div className="loginsignup-fields">
            <input
              type="email"
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit">Login</button>
          <p className="loginsignup-login">Don't have an account? <span><Link to="/signup">SignUp here</Link></span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
