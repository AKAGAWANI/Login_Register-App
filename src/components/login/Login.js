import React,{useState} from "react";
import "./Login.css"
import axios from "axios";
import { useHistory} from "react-router-dom";

const Login=({setLoginUser})=>{
  const history=useHistory()
  const[user,setUser]=useState({
    email:"",
    password:""
  
  })

  const handler=(e)=>{
    e.preventDefault();
   const {name,value}=e.target
   setUser({
    ...user,[name]:value
   })
  }

  const login=()=>{
        axios.post("http://localhost:9002/login ",user)
        .then(res=>{
          alert("login successful")
        setLoginUser(res.data.data)
        history.push('/')
      }
        ).catch(res=>alert("login failed"))
  }
    return (
      <div className="login">
       
        <h1>Login</h1>
        <input type="text" name="email" value={user.email}placeholder="Enter Your Email"  onChange={handler}/>
        <input type="password" name="password"value={user.password} placeholder="Enter Your Password" onChange={handler} />
        <div className="btn" onClick={login}>Login</div>
        <div><h3>OR</h3></div>
        <div className="btn" onClick={()=>history.push('/register')}>Register</div>
      </div>
    );
  }
  
  export default Login;