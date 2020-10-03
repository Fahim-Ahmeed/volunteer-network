import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import'./Header.css';
import volunteerLogo from '../../../fakeData/logos/Group.png'


const Header = () => {
    return (
        <div>
    <nav className="navbar navbar-expand-lg navbar-light ">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <NavLink  to="/home">
            <img className="nav-logo" src={volunteerLogo} alt=""/>
        </NavLink>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
    
    <NavLink className="nav-item" to="/home">home</NavLink>
      <NavLink className="nav-item" to="/donation">Donation</NavLink>
      <NavLink className="nav-item" to="/event">Events</NavLink>
      <NavLink className="nav-item" to="/blog" style={{marginRight:'20px'}}>Blog</NavLink>
      <button className="btn btn-primary nav-item" style={{marginRight:'10px'}} type="button">Register</button>
      <button className="btn btn-dark nav-item" type="button">Admin</button>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Header;