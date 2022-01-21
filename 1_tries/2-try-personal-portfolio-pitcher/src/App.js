import './App.css';
import React,{useState} from 'react';
import {BrowserRouter as Router, Routes , Route,  NavLink  } from 'react-router-dom';
import {signOut} from 'firebase/auth';
import {auth} from './firebase-config'

import Home from './pages/Home';
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'
import Samples from './pages/Samples'
function App() {
  const [isAuth,setIsAuth] = useState(false);

  const signUserOut = ()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }

  return (
    <Router>
      <nav>
        <NavLink to="/" >Home</NavLink>
        {isAuth && <NavLink to="/create">Create</NavLink>}
        {isAuth && <NavLink to="/samples">samples</NavLink>}

        {!isAuth ? <NavLink to="/login">login</NavLink>: <button className="btn-logout" onClick={signUserOut}>Logout </button>}
        


      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} ></Route>
        <Route path="/create" element={<CreatePost/>} ></Route>
        <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} ></Route>
        <Route path="/samples" element={<Samples/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
