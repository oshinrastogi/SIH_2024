import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./Auth.module.css";
import Lottie from "lottie-react";
import SignupSupport from './SignupSupport';
import animation2 from "../helper/animation-2.json";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            let response = await fetch("http://localhost:8080/api/v1/auth/register" , {
                method : "POST" ,
                headers : {
                    "Content-Type" : "application/json"
                } ,
                body : JSON.stringify({email , password})
            })

            if (response.ok){
                response = await response.json();
                if (response.success){
                    navigate("/");
                }
                else {
                    console.log("try again");
                }
            }


        } catch (err) {
            console.log(err);
        }
        
    };

    return (
        <div className={styles.login}>
            <div className={styles.container1}>
                <Lottie animationData={animation2}/>
            </div>
            <form onSubmit={handleSubmit} className={styles.container2}>
                <h2 className={styles.title}>SmartApp</h2>
                <label className={styles.label}> 
                    Email:<br/>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}

                        
                    />
                </label>
                <label className={styles.label}>
                    Password:<br/>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={styles.input}

                    />
                </label>
                <button type="submit" className={styles.button}>Sign Up</button>
                <Link to="/" >Already has an account ?</Link>
            </form>
            
        </div>
    );
};

export default Signup;
