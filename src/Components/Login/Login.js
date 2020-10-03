import React from 'react';
import'./Login.css';
import volunteerLogo from '../../fakeData/logos/Group.png'
import googleLogo from '../../fakeData/logos/google.png'

const Login = () => {
    return (
      <>
      <div className="container">
          <img src={volunteerLogo} style={{height:'60px', width:'150px'}} alt=""/>
      </div>
      <div className="login-form">
          <div style={{margin:'auto',paddingTop:'40%',paddingBottom:'40%'}}> 
          <h3>Login with</h3>
          <div>
              <img src={googleLogo} alt=""/>
          </div>
          </div>
        
      </div>
      </>
    );
};

export default Login;