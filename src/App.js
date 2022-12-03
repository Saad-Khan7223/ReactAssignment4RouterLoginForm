
import './App.css';
import {Routes,Route} from "react-router-dom"
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import WelCome from "./components/Welcome";
import NoPage from "./components/Nopage";
import { useState } from 'react';

function App() {
  const [userDataApp,setUserDataApp]=useState({})
  const getData=(data)=>setUserDataApp(data);
  return (
    <div className="App">
     
    <Routes>     
     <Route path="/" element={ <LogIn abc={userDataApp}/>}/>
     <Route path="signup" element={ <SignUp onClick={getData}/>}/>
     <Route path="Welcome" element={ <WelCome data={userDataApp}/>}/>
     <Route path="*" element={ <NoPage/>}/>
     </Routes>

    </div>
  );
}

export default App;
