import {Link,useNavigate} from "react-router-dom";
import {useState} from "react";
function LogIn(props) {
const [name, setName]=useState('');
const [password, setpassword]=useState('');
const navigate=useNavigate()
const [data,setData]=useState({
    name:name,
    password:password
})

const loginHandler=(e)=>{
 setData(data.name=name,data.password=password)
    if(data.name !== props.abc.UserName && data.password!==props.abc.password){
        
        alert('SignUp First')
    }
    
else  {
    
    navigate('welcome')
    
}
}





    return (
       
     <div>
        <div className="bg-dark "><Link to="/signup"><button className="bg-dark btn  text-light ml-auto mr-3 d-flex justify-content-end">SignUp</button></Link>
        </div>

    <form >
        <div className="form-group mt-5 d-flex justify-content-center p-2 container">
        <label htmlFor="username" name="username" className="mx-2">User Name</label>
        <input type="text" name='userNAme'  value={name} onChange={(e)=>setName(e.target.value)} required /><br/>
        <label htmlFor="username" name="password" className="mx-2 ">Password Name</label>
        <input type="password" name="password"  onChange={(e)=>setpassword(e.target.value)} value={password} required/>
            <button onClick={loginHandler} className="mx-2 btn bg-dark text-light">Login</button>
            </div>
        </form>
     

      </div>
    );
  }
  
  export default LogIn;