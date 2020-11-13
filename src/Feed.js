import React, {useState, useEffect} from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import Shawn_white from "./assets/Shawn_white.png"
import db from './firebase'


function Feed() {

    const [posts, setPosts] = useState([]);

    //Only runs once using useEffect hook
    //This snapshot listens to any change an re-renders based on change
    useEffect(() => {
        db.collection("posts")
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({id:doc.id, data: doc.data()} )))
            // console.log(snapshot.docs.map((doc) => ({id:doc.id, data: doc.data()} )));
        }
        );
    }, []);



    return (
        <div className="feed">
            {/*StoryReel  */}
            <StoryReel/>
            {/* MessageSender */}
            <MessageSender/>

            {/* Post */}
            {/* Iterate through post and add to post Component */}
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
{/*             
            
            <Post
            profilePic={Shawn_white}
            message="WOW!"
            timestamp="timestamp!!!"
            username="Sean Nguyen"
            image={Shawn_white}
            />
            <Post/>
            <Post/> */}
        </div>
    )
}

export default Feed
