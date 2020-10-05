import React, { useContext } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import './Header.css';
import volunteerLogo from '../../fakeData/logos/Group.png'
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Header/firebase.Config';


const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  // const [adminlogin,setAdminLogin]=useContext(UserContext)
  const provider = new firebase.auth.GoogleAuthProvider();
  let history = useHistory()
  const location = useLocation()
  const path = location.pathname;
  const handleToLogin = () => {
    history.push('/login')
  }
  const handleToAdmin = () => {
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        var token = result.credential.accessToken;
        var user = result.user;
        const signInUSer = { ...loggedInUser }
        signInUSer.email = user.email;
        signInUSer.name = user.displayName;
        setLoggedInUser(signInUSer);
        history.push('/register')
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorMessage)

      });

  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <NavLink to="/home">
          <img className="nav-logo" src={volunteerLogo} alt="" />
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

            <NavLink className="nav-item" to="/home">Home</NavLink>
            <NavLink className="nav-item" to="/review">Donation</NavLink>
            <NavLink className="nav-item" to="/home">Events</NavLink>
            <NavLink className="nav-item" to="/home" style={{ marginRight: '20px' }}>Blog</NavLink>
            <button className="btn btn-primary nav-item" style={{ marginRight: '10px' }} type="button" onClick={handleToLogin}>{loggedInUser.name ? loggedInUser.name : 'Register'}</button>
            <button className="btn btn-dark nav-item " id={
              (path === '/review') ? 'black' : 'white'
            } type="button" onClick={handleToAdmin}>Admin</button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;