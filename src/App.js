import './App.css';
import React, {useState} from "react"
import Header from './Header';
import Sidebar from "./Sidebar";
import Feed from "./Feed"
import Widgets from "./Widgets"
import Login from "./Login"
import { useStateValue } from './StateProvider';
import Profile from './Profile';
import Settings from './Settings';

function App() {

  const [{user}, dispatch] = useStateValue();
  
  //Object/State to keep track of current page/component to load
  //Reload the components - so some stuff will need to be saved
  const [appState, setAppState] = useState("newsfeed");



  return (
    //Will use the BEM naming convention for CSS
    <div className="app">
      {/* If no user, Login, else load app */}
      {!user ? 
        <Login/> //Login Component
      : (
        <div> 
          <Header/>

          <div onClick= {() =>
          {setAppState("newsfeed")}}>
            Newsfeed
          </div>

          <div onClick= {() =>
          {setAppState("profile")}}>
            Profile
          </div>

          <div onClick= {() =>
          {setAppState("settings")}}>
            Settings
          </div>

          {appState==='newsfeed' && 
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>}

          {appState==="profile" &&
            <div>
              {user.displayName}
              <Profile/>
              </div>
          }

          {appState==='settings' && 
          <div> 
            <Settings/>
            <div>{user.displayName}</div> 
            </div>}

        </div>
        ) }
    </div>
    
  );
}

export default App;
