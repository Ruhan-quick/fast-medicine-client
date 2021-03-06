import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({});

  // const saveAtLocal = (lu) => {
  //   // localStorage.setItem("myLoggedInUserLocal", lu);

  //   setLoggedInUser(lu);
  // };

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        console.log(user);
        setUser(user);
        setLoggedInUser(user);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email);
      });
  };
  return (
    <div className="container">
      <br />
      <br />
      <Button variant="success" block size="lg" onClick={handleGoogleSignIn}>
        Sign in using google
      </Button>
      <h3>Email: {user.email}</h3>
      <img src={user.photoURL} alt="" />
    </div>
  );
};

export default Login;
