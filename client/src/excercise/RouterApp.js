import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams

} from "react-router-dom";
const RouterApp = () => {
    return (
        <>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/topics">Topics</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/topics">
                            <Topics />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}
function Home() {
    let match = useRouteMatch();
    console.log(match);
    return <h2>Home</h2>;
}

function About() {
    let match = useRouteMatch();
    console.log(match);
    return <h2>About</h2>;
}

function Users() {
    let match = useRouteMatch();
    console.log(match);
    return <h2>Users</h2>;
}
function Topics() {
    let match = useRouteMatch();
    console.log(match);
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State </Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>

    );
}
function Topic() {
    let { topicId } = useParams();
    let match = useRouteMatch();
    console.log(match);
    return <h3>Requested topic ID: {topicId}</h3>;
}
export default RouterApp;