import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from "./components/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from './components/auth/SignUp';
// import Login from './components/auth/Login';
const MyQBank = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" >
                    <Dashboard />
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