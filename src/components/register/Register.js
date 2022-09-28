import React,{useState}from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import "./Register.css"
const Register=()=>{
  const history=useHistory()
  const[user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:""
  })

  const handler=(e)=>{
   const {name,value}=e.target
   setUser({
    ...user,[name]:value
   })
  
  }

  const register=()=>{
    const {name,email,password,reEnterPassword}=user
    if(name && email && password && (reEnterPassword===password)){
    
      axios.post("http://localhost:9002/register",user)
    .then(res=>console.log(res))}
    else{ 
      alert("invalid inputs") }
  }
  return (
    <div className="register">
      <h1>Register</h1>
      <input type="text" name="name" value={user.name} placeholder="Enter Your Name" onChange={handler}/>
      <input type="text" name="email" value={user.email} placeholder="Enter Your Email"onChange={handler} />
      <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handler}/>
      <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter Your Password" onChange={handler} />
      <div className="btn" onClick={register}>Register</div>
      <div><h3>OR</h3></div>
      <div className="btn" onClick={()=>history.push('/login')} >Login</div>
    </div>
  );
}
  export default Register;