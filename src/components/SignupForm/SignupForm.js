import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../components/TextInput';

export class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submitting form...');
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState(
            {
                [name]: value
            },
            this.setConfirmPasswordErrorMessage
        );
    }

    setConfirmPasswordErrorMessage() {
        if (this.state.confirmPassword && !this.verifyPasswords()) {
            this.setState({
                formErrors: {
                    confirmPassword: 'Passwords do NOT match'
                }
            });
        } else {
            this.setState({
                formErrors: {
                    confirmPassword: ''
                }
            });
        }
    }

    isFormFilled() {
        return this.state.name && this.state.email && this.state.password;
    }

    verifyPasswords() {
        return this.state.password === this.state.confirmPassword;
    }

    render() {
        return (
            <form className="slds-form slds-form_stacked" onSubmit={this.handleSubmit}>
                <TextInput
                    type="text"
                    size="large"
                    name="name"
                    label="Name"
                    errorMessage={this.state.formErrors.name}
                    handleChange={this.handleChange}
                    value={this.state.name}
                />
                <TextInput
                    type="text"
                    size="large"
                    name="email"
                    errorMessage={this.state.formErrors.email}
                    label="Email"
                    handleChange={this.handleChange}
                    value={this.state.email}
                />
                <TextInput
                    type="password"
                    size="large"
                    name="password"
                    label="Password"
                    errorMessage={this.state.formErrors.password}
                    handleChange={this.handleChange}
                    value={this.state.password}
                />
                <TextInput
                    type="password"
                    size="large"
                    name="confirmPassword"
                    label="Confirm Password"
                    errorMessage={this.state.formErrors.confirmPassword}
                    handleChange={this.handleChange}
                    value={this.state.confirmPassword}
                />
                <div className="slds-grid slds-grid_align-spread slds-grid_vertical-align-center slds-m-top_medium">
                    <button type="submit" className="slds-button slds-button_brand">
                        Sign Up
                    </button>
                    <Link to="/login">Already have account?</Link>
                </div>
            </form>
        );
    }
}

export default SignupForm;
