import React, {useState} from "react"
import "../src/Profile.css"
// import "../src/jquery-3.5.1"
import PhoneIcon from '@material-ui/icons/Phone';

import UHCL_Hawk from "./assets/UHCL_Hawk.png";
import profile_placeholder from "../src/assets/profile_placeholder.png"


function Profile() {

    const [containerState, setContainerState] = useState(0)

    return (
        
<div className="body-profile">
        <header> 
            <nav className="nav main-nav">
                <ul>
                    <li>
                        <a href="about.html">ABOUT</a>
                    </li>
                    <li>
                        <a href="ToS.html">ToS</a>
                    </li>
                </ul>
            </nav> 
            <h1 className="website-name website-name-large">Profile</h1>
        </header>
        <section className="main-backgroundImage">
                <div className="container">
                    <div className="profile-header">
                        <div className="profile-img">
                         
                            <img src={profile_placeholder} width="200" alt="" />
                        </div>
                        <div className="profile-nav-info">
                            <h3 className="user-name">FIRST LAST NAME</h3>
                            <div className="below-name-info">
                                <p className="senior">Senior</p>
                            </div>
                        </div>
                  
                        <div className="profile-option">
                            <div className="notification">
                                <i className="fa fa-bell"></i>
                                <span className="alert-message">1</span>
                            </div>
                        
                        </div>
                    </div>
                    <div className="main-bd">
                        <div className="left-side">
                            <div className="profile-side">
                                <p className="mobile-no">
                                    <i className="fa fa-phone">
                                    </i>
                                    832-832-3283
                                </p>
                                <p className="user-mail">
                                <i className="fa fa-envelope"></i>
                                ShawnTheHawkAerie@Gmail.com
                                </p>
                                <div className="user-bio">
                                    <h3>Bio</h3>
                                    <p className="bio">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni dolorum non dolorem deleniti cum explicabo aperiam. Inventore ad cumque consequatur, magni laudantium voluptate deleniti unde enim dignissimos soluta omnis eveniet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
        </section>
        <hr />
        <section>
            <div className="container">
                <div className="center-side">
       
                    <div className="nav-center">
                        <ul>
                            <li onClick={() => {
                                setContainerState(0)
                            }} className="user-info active" >Personal Info</li>
                            
                            <li onClick={() => {
                                setContainerState(1)
                            }} className="user-classNamees">Enrolled Classes</li>
                            
                            <li onClick={() => {
                                setContainerState(2)
                            }} className="user-sale">For Sale</li>
                        </ul>
                    </div>
                    <div className="profile-body">

                    {containerState === 0 &&
                        <div className="profile-info tab" style={{display: 'block'}}>
                            <h1>Peronal Information</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ex quam totam esse facere a nihil recusandae consequuntur quae veniam eaque veritatis velit, cum doloremque quo non rem aut placeat eum voluptates autem voluptate asperiores eveniet? Eveniet dolor itaque, doloremque veritatis id, earum harum quam natus libero labore perspiciatis! Nesciunt doloremque, culpa possimus magnam deserunt saepe dolorem quo aperiam consectetur? Expedita eveniet quia blanditiis ducimus exercitationem, fugiat tempora provident aperiam.</p>
                        </div>
                    }
                        
                    {containerState === 1 &&
                        <div className="profile-classNamees tab" style={{display: 'block'}}>
                            <h1>Enrolled Classes</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, esse?</p>
                        </div>
                    }
                        
                    {containerState === 2 &&
                        <div className="profile-sale tab" style={{display: 'block'}}>
                            <h1>For Sale/Looking For</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nesciunt.</p>
                        </div>
                    }
                        
                    </div>
                </div>
            </div>
        </section>

        <hr />
        
        <footer>
        <h3>Project Aerie</h3>
            <ul>
                 <li>
                    <a href="https://www.uhcl.edu" >
                    <img src={UHCL_Hawk} width="50;" alt=""/>
                    </a>
                </li>
            </ul>

            </footer>
        
        </div>
    
    )
    
}

export default Profile

