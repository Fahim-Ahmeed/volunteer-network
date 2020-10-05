import React, { useContext } from 'react';
import './Login.css';
import volunteerLogo from '../../fakeData/logos/Group.png'
import googleLogo from '../../fakeData/logos/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Header/firebase.Config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                var token = result.credential.accessToken;
                var user = result.user;
                const signInUSer = { ...loggedInUser }
                signInUSer.email = user.email;
                signInUSer.name = user.displayName;
                signInUSer.photo = user.photoURL;
                setLoggedInUser(signInUSer);
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage)

            });
    }
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    if (loggedInUser.email) {
        history.replace(from)
    }

    return (
        <>



            <div className="container">
                <div className="row">
                    <div className="col-2 " style={{ margin: 'auto', paddingBottom: '10px', marginBottom: '0px' }}>
                        <Link to="/home">
                            <img src={volunteerLogo} className="img-fluid" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">

                        <div className="login-form">
                            <div style={{ margin: 'auto', paddingTop: '40%', paddingBottom: '40%' }}>

                                <h3 style={{ textAlign: 'center' }}>Login with</h3>

                                <div className="google-area" onClick={handleGoogleLogin}>
                                    <img src={googleLogo} style={{ height: '30px', width: '35px' }} alt="" />
                                    <h6 style={{ display: 'inline' }}>  continue with google</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;