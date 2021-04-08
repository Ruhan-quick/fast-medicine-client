import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import Checkout from "./components/Checkout/Checkout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Orders from "./components/Orders/Orders";

export const UserContext = createContext();
export const UserContext2 = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [clickedProduct, setClickedProduct] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <UserContext2.Provider value={[clickedProduct, setClickedProduct]}>
        {/* <h2>Current User: {loggedInUser.email}</h2> */}
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/checkout">
              <Checkout></Checkout>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext2.Provider>
    </UserContext.Provider>
  );
}

export default App;
