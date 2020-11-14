import React, { useState } from 'react'
import "./Login.css"
import Shawn_white from "./assets/Shawn_white.png"
import Button from '@material-ui/core/Button';
import {auth, provider} from "./firebase"

import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer"

import UHCL_Hawk from "./assets/UHCL_Hawk.png";
import FB_icon from "./assets/fb-icon.png";
import Profile_Icon from "./assets/profile-icon.png";

function Login() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result=> {

            dispatch( {
                type: actionTypes.SET_USER,
                user: result.user,
            })

        })
        .catch((error) => alert(error.message));
    };

    function register() {
        let login = document.getElementById("login")
        let register = document.getElementById("register")
        let btn = document.getElementById("btn")

        login.style.left = "-400px";
        register.style.left = "50px";
        btn.style.left = "110px";
    }

    function login() {
        let login = document.getElementById("login")
        let register = document.getElementById("register")
        let btn = document.getElementById("btn")

        login.style.left = "50px";
        register.style.left = "450px";
        btn.style.left = "0px";
    }


     function signUp() {
        var email = document.getElementById("createEmail");
    
        var password = document.getElementById("createPassword");

        if (email.value.search('@UHCL.edu') != -1) {
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
        }
        else {
            alert('Please enter in a valid UHCL email using @UHCL.edu')
        }
        
     }

     function signInEmail(){
        var email = document.getElementById("loginEmail");
        var password = document.getElementById("loginPassword");
    
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        //console.log(email.value)
        //console.log(password.value)
     }

     auth.onAuthStateChanged(function(userLogin) {
        //signed in
        if (userLogin)  {

            dispatch( {
                type: actionTypes.SET_USER,
                user: userLogin,
            })
            //console.log(userLogin)
        }
        else {
            //console.log('none')
        }
    })

    return (
        <div class="hero">
            <div class="form-box">
                <div class="button-box">
                    <div id="btn"></div>
                    <button type="button" class="toggle-btn" onClick={login}>Log In</button>
                    <button type="button" class="toggle-btn" onClick={register}>Register</button>
                </div>
                <div class="mascot-icon">
                    <a href="/loginPage2/about.html" target="_blank"><img src={Shawn_white}/></a>
                    <a href="https://www.uhcl.edu" target="_blank"><img src={UHCL_Hawk}/></a>
                    <a href="https://www.facebook.com/UHClearLake/" target="_blank"><img src={FB_icon}/></a>
                    <a href="/loginPage2/profile.html" target="_blank"><img src={Profile_Icon}/></a>
                </div>
                <div id="login" class="input-group">
                    <input type="email" class="input-field" placeholder="UHCL Email" required id="loginEmail"/>
                    <input type="password" class="input-field" placeholder="Password" required id="loginPassword"/>
                    <input type="checkbox" class="check-box"/><span>Remember Password</span>
                    <button class="submit-btn" onClick={signInEmail}>Log in</button>
                    <Button onClick={signIn}>Sign In</Button>
                </div>
                <div id="register" class="input-group">
                    <input type="text" class="input-field" value={firstName} placeholder="First Name" required id="firstName" onChange={(event) => {
                        setFirstName(event.target.value)
                    }}/>
                    <input type="text" class="input-field" placeholder="Last Name" value={lastName} required id="lastName" onChange={(event) => {
                        setLastName(event.target.value)
                    }}/>
                    <input type="email" class="input-field" placeholder="UHCL Email" required id="createEmail"/>
                    <input type="password" class="input-field" placeholder="Password" required id="createPassword"/>
                    <input type="checkbox" class="check-box" required/><span>I agree to the <a href="/loginPage2/ToS.html" target="_blank" style={{color: "dodgerblue"}}> Terms & Conditions</a></span>
                    <button type="submit" class="submit-btn" onClick={signUp}>Register</button>
                </div>
            </div>
        </div>  
    )
}

export default Login


    {/* // return (
    //     <div className="login">
    //         <div className="login__logo">
    //             <img src={Shawn_white} alt=""/>
    //         </div>

    //         <h1>Project Aerie Social Media For UHCL Students And Faculty</h1>

    //        <Button type="submit" onClick={signIn}>Sign In</Button>
    //     </div>
    // ) */}