
import React, { useState } from 'react';
import axios from 'axios';
const SignUp = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [loaded, setLoaded] = useState(0);
    let onChangeHandler = event => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0])
        setLoaded(0);
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData()
        data.append('file', selectedFile);
        axios.post("http://localhost:8000/upload", data, {
        })
            .then(res => {
                console.log(res.statusText)
            })
        console.log("Submitted");
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
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="col-12">
                                <input className="form-control myqb-control" type="text" name="fullname" placeholder="Full Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-12">
                                <input className="form-control myqb-control" type="text" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-12">
                                <input className="form-control myqb-control" type="text" name="mobile" placeholder="Mobile" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-12">
                                <input className="form-control myqb-control" type="text" name="password" placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-12">
                                <input onChange={onChangeHandler} className="form-control-file" type="file" name="uploadFile" />
                            </div>
                        </div>
                        <div className="form-group form-check">
                            <div className="col-12">
                                <label className="form-check-label">
                                    <input className="form-check-input" checked="checked" type="checkbox" /> I accept <a href="">Terms and Conditions</a>
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