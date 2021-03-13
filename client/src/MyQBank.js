import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import User from "./pages/User";
import Posts from "./pages/Posts";
import Genre from "./pages/Genre";
// import Dashboard1 from "./pages/Dashboard1";
// import SignUp from './components/auth/SignUp';
// import Login from './components/auth/Login';
const MyQBank = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route exact path="/user" >
                    <User />
                </Route>
                <Route exact path="/posts" >
                    <Posts />
                </Route>
                <Route exact path="/genre" >
                    <Genre />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default MyQBank;