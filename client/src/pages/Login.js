import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, Redirect } from "react-router-dom";
import auth from "../services/authService"
const Login = (props) => {
    let history = useHistory();
    let location = useLocation();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    let onChangeHandler = e => {
        let userCopy = { ...user }
        userCopy[e.currentTarget.name] = e.currentTarget.value;
        setUser(userCopy);
    }
    const submitHandle = async (e) => {
        e.preventDefault();
        // const res = await axios.post("http://localhost:3005/api/auth", {
        //     email: "duruliu72@gmail.com",
        //     password: "123456"
        // });
        try {
            await auth.login(user);
            let { from } = location.state || { from: { pathname: "/" } };
            window.location = from.pathname;

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errorsTemp = { ...errors }
                errorsTemp.email = ex.response.data;
                setErrors(errorsTemp);
            }
        }
    }
    if (auth.authUser()) {
        return <Redirect to="/" />
    }
    return (<div className="sign-up-section">
        {/* <img src="http://api.myqbank.org/static/images/kitten.png" /> */}
        <div className="card sign-up__card">

            <div className="card-body">
                <div>
                    <p className="w-email login-social">Login to Myqbank with</p>
                </div>
                <form action="" method="post">
                    <div className="form-group mt-4">
                        <div className="col-12">
                            <button className="btn myqb-btn btn-fb"><i className="fab fa-facebook-f"></i>Login with facebook</button>
                        </div>
                    </div>
                </form>
                <form action="" method="post">
                    <div className="form-group mt-4">
                        <div className="col-12">
                            <button className="btn myqb-btn btn-g"><i className="fab fa-google"></i> Login with Google</button>
                        </div>
                    </div>
                </form>
                <div>
                    <p className="w-email login-em">Or login with email or mobile</p>
                </div>
                <form className="mt-4" action="register.html" onSubmit={(e) => {
                    submitHandle(e)
                }}>
                    <div className="form-group">
                        <div className="col-12">
                            <input className="form-control myqb-control" type="text" name="email" onChange={onChangeHandler} value={user.email} placeholder="Enter Email/Mobile Number" />
                            {(errors && errors.email) && <div className="alert alert-danger">{errors.email}</div>}
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-12">
                            <input className="form-control myqb-control" type="text" name="password" onChange={onChangeHandler} value={user.password} placeholder="Enter Password" />
                        </div>
                    </div>
                    <div className="form-group form-check">
                        <div className="col-12">
                            <label className="form-check-label">
                                <input className="form-check-input" checked="checked" type="checkbox" />Remember me
                            </label>
                        </div>
                    </div>
                    <div className="form-group mt-4">
                        <div className="col-12">
                            <button className="btn myqb-btn">Login</button>
                        </div>
                    </div>
                    <div className="form-group row mt-4">
                        <div className="col-7">
                            <a href="">Forgot your password?</a>
                        </div>
                        <div className="col-5 text-right">
                            <a href="register.html">Create an account</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

export default Login;