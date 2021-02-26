import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import AppStore from './AppStore';
import Input from "../formelement/Input";
import CheckBox from "../formelement/CheckBox";
import SocialIcons from './SocialIcons';
import BeforeLoginFooter from './BeforeLoginFooter';
import { validate, validateProperty } from '../formelement/FormFun';
const Login = () => {
    const [account, setAccount] = useState({ email: "", password: "", rememberme: 0 });
    const [errors, setErrors] = useState({});
    const model = {
        email: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password")
    };
    function handleChange(e) {
        if (e.currentTarget.type !== 'checkbox') {
            var errorstemp = { ...errors };
            const errorMessage = validateProperty(Joi, model, e.currentTarget);
            if (errorMessage) errorstemp[e.currentTarget.name] = errorMessage;
            else delete errorstemp[e.currentTarget.name];
            setErrors(errorstemp);
        }
        const accounttemp = { ...account };
        const value = e.currentTarget.type === 'checkbox' ? (e.currentTarget.checked ? 1 : 0) : e.currentTarget.value;
        accounttemp[e.currentTarget.name] = value;
        setAccount(accounttemp);
    }
    function handleSubmit(e) {
        e.preventDefault();
        const errorstemp = validate(Joi, model, { email: account.email, password: account.password });
        setErrors(errorstemp ? errorstemp : {});
        console.log(errorstemp);
        if (errorstemp) return;
        console.log("Submitted");
    }
    function doActiveBtn() {
        return validate(Joi, model, { email: account.email, password: account.password });
    }
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
                                        <form onSubmit={handleSubmit}>
                                            <Input
                                                name="email"
                                                value={account.email}
                                                label="Email"
                                                onChange={handleChange}
                                                error={errors.email}
                                            />
                                            <Input
                                                name="password"
                                                value={account.password}
                                                label="Password"
                                                onChange={handleChange}
                                                error={errors.password}
                                            />
                                            <div className="fg-btn signin__btn">
                                                <input disabled={doActiveBtn()} type="submit" className="btn" value="Login" />
                                            </div>
                                            <div className="signin__remember">
                                                <div className="fl">
                                                    <CheckBox
                                                        name="rememberme"
                                                        value={account.rememberme}
                                                        label="Remember me"
                                                        onChange={handleChange}
                                                    />
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

export default Login;