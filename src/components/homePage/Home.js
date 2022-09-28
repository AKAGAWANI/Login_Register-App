import React from "react";
import "./Home.css"
const Home=({setLoginUser})=>{
    return (
      <div className="home">
        <h1>FACEBOOK</h1>
        <p>Welcomes You!</p>
        <div className="btn" onClick={()=>setLoginUser({})}>Logout</div>
      </div>
    );
  }
  
  export default Home;