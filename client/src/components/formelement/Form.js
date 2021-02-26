import React, { Component } from 'react';
import Input from "./Input";
import CheckBox from "./CheckBox";
import Joi from "joi-browser";
class Form extends Component {
    state = {
        data: {},
        optional: {},
        errors: {}
    }
    validate = () => {
        let schema = Joi.object(this.model);
        let options = { abortEarly: false };
        let result = schema.validate(this.state.data, options);
        if (!result.error) return null;
        var errors = {};
        for (let item of result.error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    }
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        let schema = Joi.object({
            [name]: this.model[name]
        });

        let result = schema.validate(obj);
        const { error } = result;
        if (!error) return null;
        return error.details[0].message;
    }
    handleChange = (e) => {
        if (e.currentTarget.type !== 'checkbox') {
            var errors = { ...errors };
            const errorMessage = this.validateProperty(e.currentTarget);
            if (errorMessage) errors[e.currentTarget.name] = errorMessage;
            else delete errors[e.currentTarget.name];
            this.setState({ errors });
        }
        const data = { ...this.state.data };
        const optional = { ...this.state.optional };
        const value = e.currentTarget.type === 'checkbox' ? (e.currentTarget.checked ? 1 : 0) : e.currentTarget.value;
        if (e.currentTarget.type === 'checkbox') {
            optional[e.currentTarget.name] = value;
        } else {
            data[e.currentTarget.name] = value;
        }
        this.setState({ data });
        this.setState({ optional });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        console.log("okkkkkk", errors);
        if (errors) return;
        this.doSubmit();
    }
    renderButton(label) {
        return <input disabled={this.validate()} type="submit" className="btn" value={label} />
    }
    renderInput(name, label) {
        const { data, errors } = this.state;
        return <Input
            name={name}
            value={data[name]}
            label={label}
            onChange={this.handleChange}
            error={errors[name]}
        />
    }
    renderCheckBox(name, label) {
        const { data, errors, optional } = this.state;
        return <CheckBox
            name={name}
            value={optional[name]}
            label={label}
            onChange={this.handleChange}
        />
    }
}
export default Form;