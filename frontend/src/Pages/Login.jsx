import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../Config';
import styles from '../Styles/Login.module.css';

const Login = () => {
    const [user, setUser] = useState(''); 
    const [pass, setPass] = useState(''); 
    const [error, setError] = useState(''); 
    const navigate = useNavigate(); 

    
    const loginfunc = (e) => {
        e.preventDefault();
        setError(''); 
        signInWithEmailAndPassword(auth, user, pass)
            .then(() => {
                console.log("Logged in successfully");
                alert("Logged In successfully");
                navigate('/Home'); 
            })
            .catch((error) => {
                console.error("Failed to log in", error);
                setError("Invalid email or password. Please try again."); 
            });
    };

    return (
        <div className={styles['login-container']}>
            <div className={styles.Login}>
                <h2>Login</h2>
                <form onSubmit={loginfunc}>
                    <input
                        type="email" 
                        placeholder="Email"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                    <input
                        type="password" 
                        placeholder="Password"
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                        required
                    />
                    <button type="submit">Login</button>
                </form>

                {}
                {error && <p className={styles.error}>{error}</p>}
                
                <p className={styles.bottom}>
                    Don't have an account? <Link className={styles.link1} to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
