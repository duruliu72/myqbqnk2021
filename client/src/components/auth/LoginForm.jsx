import React from 'react';
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import AppStore from './AppStore';
import Form from "../formelement/Form";
import SocialIcons from './SocialIcons';
import BeforeLoginFooter from './BeforeLoginFooter';
class LoginForm extends Form {
    state = {
        data: { email: "", password: "" },
        optional: { rememberme: "" },
        errors: {}
    }
    model = {
        email: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password")
    };
    doSubmit = () => {
        console.log("Submitted");
    }
    render() {
        return (
            <>
                <div className="signin-section">
                    <div className="box">
                        <div className="box__row">
                            <div className="box__col-6">
                                <div className="signin__app">
                                    <AppStore />
                                </div>
                            </div>
                            <div className="box__col-6">
                                <div className="signin">
                                    <div className="signin__inner">
                                        <div className="signin__top">
                                            <h2 className="heading">Log In</h2>
                                            <p><span>Don’t have an account?</span><Link to="/signup" className="link" href="">Sign Up</Link></p>
                                        </div>
                                        <div className="signin__form">
                                            <form onSubmit={this.handleSubmit}>
                                                {this.renderInput('email', 'Email')}
                                                {this.renderInput('password', 'Password')}
                                                <div className="fg-btn signin__btn">
                                                    {this.renderButton("Login")}
                                                </div>
                                                <div className="signin__remember">
                                                    <div className="fl">
                                                        {this.renderCheckBox('rememberme', 'Remember me')}
                                                    </div>
                                                    <div className="fr">
                                                        <a href="">Forgot your Password?</a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <SocialIcons />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BeforeLoginFooter />
            </>
        );
    }
}

export default LoginForm;