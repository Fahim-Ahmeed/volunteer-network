import React, { createContext, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import VolunteerForm from './Components/VolunteerForm/VolunteerForm';
import Review from './Components/Review/Review';
export const UserContext =createContext()

function App() {
  const[loggedInUser,setLoggedInUser]=useState({
    name:'',
    email:'',
    photo:''
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className="App">
    <Router>
      <Switch>
    <Route path="/home"> 
      <Home></Home>
    </Route>
    <PrivateRoute path="/volunteerForm">
    <VolunteerForm></VolunteerForm>
    </PrivateRoute>
    <PrivateRoute path="/review">
  <Review></Review>
    </PrivateRoute>
    <Route path="/login">
      <Login></Login>
    </Route>
    <Route path="/">
      <Home></Home>
    </Route>
    </Switch>
    </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
