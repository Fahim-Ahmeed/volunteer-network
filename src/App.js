import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
    <Route path="/home"> 
      <Home></Home>
    </Route>
    <Route path="/login">
      <Login></Login>
    </Route>
    <Route path="/">
      <Home></Home>
    </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
