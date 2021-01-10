import React, { useState } from 'react'
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import '../Styles/Login.css'
import login from '../features/userSlice'

function Login() {
    const [name, setName] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();



    const loginToApp = (e) => {
        e.preventDefault();
    };
    const register = () => {
        if (!name) {
            return alert('Please Enter a full name');
        }

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePicture,
                    })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoURL: profilePicture
                            }));

                    });
            }).catch((error) => alert(error));
    };
    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
                alt='' />
            <form className="login__form">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    type="text"
                />


                <input
                    value={profilePicture}
                    onChange={(e) => setProfilePicture(e.target.value)}
                    placeholder="Profile Pic Url"
                    type="text"
                />


                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                />

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.password)}
                    placeholder="Password"
                    type="password"
                />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member? {" "} <span className="login__register" onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
