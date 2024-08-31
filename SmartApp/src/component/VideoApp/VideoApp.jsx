import React, { useState } from 'react';
import styles from './VideoApp.module.css';
import { useNavigate } from 'react-router-dom';

const VideoApp = () => {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = () => {
    const validationErrors = {};
    if (!id) validationErrors.id = "Room ID is required";
    if (!username) validationErrors.username = "Username is required";

    if (Object.keys(validationErrors).length === 0) {
      navigate(`/dashboard/videoApp/room/${id}` , {state : {username}});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>This is a Video App</h1>
      <div className={styles.inputContainer}>
        <input 
          type="text" 
          placeholder="Enter Room Id" 
          className={styles.input} 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
        />
        {errors.id && <p className={styles.error}>{errors.id}</p>}

        <input 
          type="text" 
          placeholder="Enter your username" 
          className={styles.input} 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        {errors.username && <p className={styles.error}>{errors.username}</p>}

        <button className={styles.button} onClick={handleSubmit}>Enter Room</button>
      </div>
    </div>
  );
};

export default VideoApp;
