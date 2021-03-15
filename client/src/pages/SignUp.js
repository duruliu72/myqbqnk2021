import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { validate, validateProperty } from '../models/user';
import { register } from "../services/userService"
import auth from "../services/authService"
const SignUp = () => {
    let history = useHistory();
    let [user, setUser] = useState({
        fullName: "",
        email: "",
        mobile: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    let onChangeHandler = e => {
        var errorsCopy = { ...errors };
        const errorMessage = validateProperty(e.currentTarget);
        if (errorMessage) errorsCopy[e.currentTarget.name] = errorMessage;
        else delete errorsCopy[e.currentTarget.name];
        setErrors(errorsCopy);
        let userCopy = { ...user }
        userCopy[e.currentTarget.name] = e.currentTarget.value;
        setUser(userCopy);
    }
    let handleSubmit = async (event) => {
        event.preventDefault();
        const errorsCopy = validate(user);
        setErrors(errorsCopy);
        try {
            const res = await register({ ...user });
            auth.loginWithJwt(res.headers["x-auth-token"]);
            window.location = "/"
            // // history.push("/");
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errorsTemp = { ...errors }
                errorsTemp.email = ex.response.data;
                setErrors(errorsTemp);
            }
        }
    }
    return (
        <div className="sign-up-section">
            <div className="card sign-up__card">
                <div className="card-body">
                    <div>
                        <p className="w-email w-social">Create your free account</p>
                    </div>
                    <form action="" method="post">
                        <div className="form-group mt-4">
                            <div className="col-12">
                                <button className="btn  myqb-btn btn-fb"><i className="fab fa-facebook-f"></i>Sign up with facebook</button>
                            </div>
                        </div>
                    </form>
                    <form action="" method="post">
                        <div className="form-group mt-4">
                            <div className="col-12">
                                <button className="btn  myqb-btn btn-g"><i className="fab fa-google"></i> Sign up with Google</button>
                            </div>
                        </div>
                    </form>
                    <div>
                        <p className="w-email">or create account with email</p>
                    </div>
                    <form className="mt-4" onSubmit={(e) => {
                        handleSubmit(e);
                    }}>
                        <div className="form-group">
                            <div className="col-12">
                                <input className="form-control myqb-control" type="text" name="fullName" onChange={onChangeHandler} value={user.fullName} placeholder="Full Name" />
                                {(errors && errors.fullName) && <div className="alert alert-danger">{errors.fullName}</div>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-12">
                                <input className="form-control myqb-control" type="text" name="email" onChange={onChangeHandler} value={user.email} placeholder="Email" />
                                {(errors && errors.email) && <div className="alert alert-danger">{errors.email}</div>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-12">
                                <input className="form-control myqb-control" type="text" name="mobile" onChange={onChangeHandler} value={user.mobile} placeholder="Mobile" />
                                {(errors && errors.mobile) && <div className="alert alert-danger">{errors.mobile}</div>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-12">
                                <input className="form-control myqb-control" type="text" name="password" onChange={onChangeHandler} value={user.password} placeholder="Password" />
                                {(errors && errors.password) && <div className="alert alert-danger">{errors.password}</div>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-12">
                                <input className="form-control-file" type="file" name="uploadFile" />
                            </div>
                        </div>
                        <div className="form-group form-check">
                            <div className="col-12">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" /> I accept <a href="">Terms and Conditions</a>
                                </label>
                            </div>
                        </div>
                        <div className="form-group mt-4">
                            <div className="col-12">
                                <button className="btn  myqb-btn">Sign Up</button>
                            </div>
                        </div>
                        <div className="form-group mt-4">
                            <div className="col-12 text-center">
                                <a href="login.html">Already have account?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;