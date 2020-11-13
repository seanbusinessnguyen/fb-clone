import './App.css';
import React, {useState} from "react"
import Header from './Header';
import Sidebar from "./Sidebar";
import Feed from "./Feed"
import Widgets from "./Widgets"
import Login from "./Login"
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();
  
  //Object/State to keep track of current page/component to load
  //Reload the components - so some stuff will need to be saved
  const [appState, setAppState] = useState("login");



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
          {setAppState("settings")}}>
            setttings
          </div>
          
          <div onClick= {() =>
          {setAppState("login")}}>
            Login
          </div>

          {appState==='login' && 
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>}

          {appState==='settings' && 
          <div> 
            settings component to be added here 
            </div>}

        </div>
        ) }
      
    

    </div>
    
  );
}

export default App;
