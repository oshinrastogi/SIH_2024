import React, { useEffect, useState } from 'react';
import styles from './Auth.module.css';
import LoginSupport from './LoginSupport';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../helper/animation-1.json';
import animation2 from '../helper/animation-2.json';
import { useAuth } from './context/auth';

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(7);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    // Clear the interval when count reaches zero
    if (count <= 0) {
      clearInterval(interval);
      setLoading(false);
    }

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, [count]); // Include count as a dependency

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
        {/* Integrate the LoginSupport Component Here */}
        <LoginSupport />
      </div>
    </div>
  );
};

export default Login;
