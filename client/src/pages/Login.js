const Login = () => {
    return (<div className="sign-up-section">
        <img src="http://localhost:8000/static/images/kitten.png" />
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
                <form className="mt-4" action="register.html" method="POST" enctype="multipart/form-data">
                    <div className="form-group">
                        <div className="col-12">
                            <input className="form-control myqb-control" type="text" name="email" placeholder="Enter Email/Mobile Number" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-12">
                            <input className="form-control myqb-control" type="text" name="password" placeholder="Enter Password" />
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