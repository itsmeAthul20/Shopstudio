import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../Config';
import styles from '../Styles/Login.module.css'; 

const Signup = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();

    const signupfunc = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, user, pass)
            .then(() => {
                console.log("registered");
                navigate('/');
            })
            .catch((error) => console.log("Failed to register:", error));
    };

    return (
        <div className={styles['login-container']}>
            <div className={styles['full-screen-container']}>
                <div className={styles.Login}>
                    <h2>Sign Up</h2>
                    <form onSubmit={signupfunc}>
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
                        <button type="submit">Sign Up</button>
                    </form>
                    <p className={styles.bottom}>
                        Already have an account? <Link className={styles.link1} to="/">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
