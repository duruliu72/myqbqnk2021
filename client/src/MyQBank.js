import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import auth from "./services/authService"
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import User from "./pages/User";
import Posts from "./pages/Posts";
import JsonPost from "./pages/JsonPost";
import Genre from "./pages/Genre";
// import Dashboard1 from "./pages/Dashboard1";
// import SignUp from './components/auth/SignUp';
// import Login from './components/auth/Login';
const MyQBank = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(auth.authUser);
    }, []);
    return (
        <Router>
            <Switch>
                <ProtectedRoute exact path="/" >
                    <Home user={user} />
                </ProtectedRoute>
                <Route exact path="/user" >
                    <User />
                </Route>
                <Route exact path="/posts" >
                    <Posts />
                </Route>
                <Route exact path="/jsonpost" >
                    <JsonPost />
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
                <Route path="/logout">
                    <Logout />
                </Route>
            </Switch>
        </Router>
    );
}

export default MyQBank;