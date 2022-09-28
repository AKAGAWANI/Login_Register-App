import React ,{useState} from 'react';
import Home from './components/homePage/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import './App.css';
function App() {
const [loginUser,setLoginUser]=useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            { loginUser && loginUser._id ?<Home setLoginUser={setLoginUser}/> :<Login  setLoginUser={setLoginUser}/>}
            </Route>
          <Route path='/register'><Register/></Route>
          <Route path='/login'><Login setLoginUser={setLoginUser}/></Route>
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
