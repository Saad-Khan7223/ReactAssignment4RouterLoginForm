import { useState } from "react";
import {Link} from "react-router-dom";

function SignUp(props) {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('')
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [userData,setUserData]=useState({
        firstName:'',
        lastName:'',
        userName:'',
        password:''
    })
    const createUserHandler=(e)=>{
       
        setUserData(userData.firstName=firstName,userData.lastName=lastName,userData.userName=userName,userData.password=password)
        props.onClick(userData)
    }

    return (
        
      <div >
        <div className="bg-dark mb-3 d-flex justify-content-end ">
        <Link to='/'>  <button className="mr-3 btn bg-dark text-light">Login</button></Link></div>
        <form className="form-group">
          <div className="d-flex align-items-center flex-column w-50 mx-auto container">
       <label htmlFor="Firstname" name="firstname">First Name</label>
        <input type="text" name="firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/><br/>
        <label htmlFor="lastname" name="lastname">Last Name</label>
        <input type="text" name="lastname" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/><br/>
        <label htmlFor="username" name="username" >User Name</label>
        <input type="text" name="username" value={userName} onChange={(e)=>setUserName(e.target.value)} required/><br/>
        <label htmlFor="username" name="password">password Name</label>
        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/><br/>
        <Link to="/"><button className="mr-3 btn bg-dark text-light" onClick={createUserHandler}>Create User</button></Link>
        </div>
        </form>
      </div>
    );
  }
  
  export default SignUp;