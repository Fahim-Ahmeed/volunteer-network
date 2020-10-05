import React, { createContext, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
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
import Register from './Components/Register/Register';
import AddEvent from './Components/AddEvent/AddEvent';
export const UserContext =createContext()

function App() {
  const[loggedInUser,setLoggedInUser]=useState({
    name:'',
    email:'',
    photo:''
  })
  const [adminlogin,setAdminLogin]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser],[adminlogin,setAdminLogin]}>
    {/* <div className="App"> */}
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
    <PrivateRoute path="/register">
    <Register></Register>
    </PrivateRoute>
    <PrivateRoute path="/addEvent">
    <AddEvent></AddEvent>
    </PrivateRoute>
    <Route path="/login">
      <Login></Login>
    </Route>
    <Route exact path="/">
      <Home></Home>
    </Route>
    </Switch>
    </Router>
    {/* </div> */}
    </UserContext.Provider>
  );
}

export default App;
