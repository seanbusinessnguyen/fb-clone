import React from 'react'
import Story from './Story'
import './StoryReel.css'
import Shawn_white from "./assets/Shawn_white.png"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
            // image is background
            image={Shawn_white}
            // profileSrc is picture 
            profileSrc= {Shawn_white}
            title="Sean Nguyen"
            />
            <Story
            // image is background
            image=''
            // profileSrc is picture 
            profileSrc= ''
            title="Sean Nguyen"
            />

        </div>
    )
}

export default StoryReel
