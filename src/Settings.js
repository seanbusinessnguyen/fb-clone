import React from 'react'
import './Settings.css'
import firebase from "firebase";
import {firebaseApp} from "./firebase.js"
// import * as FontAwesome from "@font-awesome";

function Settings() {

    const fileUpload = (e) => {
        const file = e.target.files[0]
        const storageRef = firebaseApp.storage().ref()
        const fileRef = storageRef.child(`profile_pictures/${file.name}`)
        fileRef.put(file).then(() => {
            console.log("Uploaded a file")
        })
    }

    return (
        <div className="settings">
            {/* <link rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            </link> */}

            {/* File Upload */}
            <input type="file" onChange={fileUpload}/>

            {/* Begin Settings JSX */}
            <div class="container">
                <div class="leftbox">
                    <nav>
                        <a onclick="tabs(0)"
                        class="tab active">
                            <i class="fa fa-key"></i>
                        </a>
                        <a onclick="tabs(1)"
                        class="tab">
                            <i class="fa fa-user-circle"></i>
                        </a>
                        <a onclick="tabs(2)"
                        class="tab">
                            <i class="fa fa-envelope"></i>
                        </a>
                        <a onclick="tabs(3)"
                        class="tab">
                            <i class="fa fa-cog"></i>
                        </a>
                    </nav>
                </div>        
            </div> 
        </div>
    )
}

export default Settings
 