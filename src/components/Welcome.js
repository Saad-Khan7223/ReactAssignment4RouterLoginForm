import {Link} from "react-router-dom";
function WelCome(props) {
    
    return (
        
      <div className="App">
        <div className="bg-dark btn  text-light ml-auto mr-3 d-flex justify-content-end">
        <Link to="/"><button className="bg-dark btn text-light" >Logout</button></Link></div>
        <div className="container d-flex align-item-center flex-column ">
        <h1>Welcome {props.data.firstName} {props.data.lastName} </h1>
        <h1>Your User Name Is {props.data.userName}</h1>
        </div>
      </div>
    );
  }
  
  export default WelCome;