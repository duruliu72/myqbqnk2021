import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import AppStore from './AppStore';
import Input from "../formelement/Input";
import CheckBox from "../formelement/CheckBox";
import SocialIcons from './SocialIcons';
import BeforeLoginFooter from './BeforeLoginFooter';
import { validate, validateProperty } from '../formelement/FormFun';
const SignUp = () => {
    const [account, setAccount] = useState({ firstName: "", lastName: "", email: "", mobile: "", password: "", confirm_password: "" });
    const [errors, setErrors] = useState({});
    const model = {
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().required().label("Email"),
        mobile: Joi.string().required().label("Mobile"),
        password: Joi.string().required().label("Password"),
        confirm_password: Joi.string().required().label("Confirm Password"),
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
        const errorstemp = validate(Joi, model, account);
        setErrors(errorstemp ? errorstemp : {});
        console.log(errorstemp);
        if (errorstemp) return;
        console.log("Submitted");
    }
    function doActiveBtn() {
        return validate(Joi, model, account);
    }
    return (<>
        <div className="signup-section">
            <div className="box">
                <div className="box__row">
                    <div className="box__col-6">
                        <div className="signup__app">
                            <AppStore />
                        </div>
                    </div>
                    <div className="box__col-6">
                        <div className="signup">
                            <div className="signup_top">
                                <h2 className="heading">Sign Up</h2>
                                <p><span>Already have an account?</span><Link to="/login" className="link">Sign In</Link></p>
                            </div>
                            <div className="signup__form">
                                <form onSubmit={handleSubmit}>
                                    <div className="box__row">
                                        <div className="box__col-6">
                                            <Input
                                                name="firstName"
                                                value={account.firstName}
                                                label="First Name"
                                                onChange={handleChange}
                                                error={errors.firstName}
                                            />
                                        </div>
                                        <div className="box__col-6">
                                            <Input
                                                name="lastName"
                                                value={account.lastName}
                                                label="Last Name"
                                                onChange={handleChange}
                                                error={errors.lastName}
                                            />
                                        </div>
                                    </div>
                                    <div className="box__row">
                                        <div className="box__col-6">
                                            <Input
                                                name="email"
                                                value={account.email}
                                                label="Email"
                                                onChange={handleChange}
                                                error={errors.email}
                                            />
                                        </div>
                                        <div className="box__col-6">
                                            <Input
                                                name="mobile"
                                                value={account.mobile}
                                                label="Mobile"
                                                onChange={handleChange}
                                                error={errors.mobile}
                                            />
                                        </div>
                                    </div>
                                    <div className="box__row">
                                        <div className="box__col-6">
                                            <Input
                                                name="password"
                                                value={account.password}
                                                label="Password"
                                                onChange={handleChange}
                                                error={errors.password}
                                            />
                                        </div>
                                        <div className="box__col-6">
                                            <Input
                                                name="confirm_password"
                                                value={account.confirm_password}
                                                label="Confirm Password"
                                                onChange={handleChange}
                                                error={errors.confirm_password}
                                            />
                                        </div>
                                    </div>
                                    <div className="fg-btn">
                                        <input disabled={doActiveBtn()} type="submit" className="btn" value="Create Account" />
                                    </div>
                                </form>
                            </div>
                            <div className="signup__terms">
                                <p>By signing up you confirm that you accept all <a className="link" href="">Terms of Service</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BeforeLoginFooter />
    </>);
}
export default SignUp;