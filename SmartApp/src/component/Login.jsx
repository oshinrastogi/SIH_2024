// src/Login.js
import React, { useEffect, useState } from 'react';
import styles from './Auth.module.css';
import LoginSupport from './LoginSupport';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../helper/animation-1.json';
import animation2 from '../helper/animation-2.json';
import { useAuth } from './context/auth';

const Login = () => {
  const [loading, setloading] = useState(true);
  const [count, setcount] = useState(7);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setcount((prev) => prev - 1);
    }, 1000);

    // Clear the interval when count reaches zero
    if (count <= 0) {
      clearInterval(interval);
      setloading(false);
    }

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, [count]); // Include count as a dependency

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle the login logic here
    try {
      let response = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        response = await response.json();
        if (response.success) {
          setAuth({ ...auth, token: response.token });
          localStorage.setItem('auth', JSON.stringify(response.token));
          navigate('/dashboard/main');
        } else {
          console.log('try again');
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <Lottie style={{ height: '100vh', backgroundColor: '#111' }} animationData={animationData} />
    );
  }

  return (
    <div className={styles.login}>
      <div className={styles.container1}>
        <Lottie animationData={animation2} />
      </div>
      <div className={styles.container2}>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <h2 className={styles.title}>Login</h2>
          <label className={styles.label}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </label>
          <button type="submit" className={styles.button}>
            Login
          </button>
          <Link to="/signup" className={styles.link}>Don't have an account?</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
