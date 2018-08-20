import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
            },
            isEmailValid: false,
            isPasswordValid: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.isFormValid()) {
            this.props.signup({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            });
            this.setState({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                isEmailValid: false,
                isPasswordValid: false
            });
        } else {
            console.log('form is not valid');
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState(
            {
                [name]: value
            },
            () => this.validateField(name, value)
        );
    }

    setConfirmPasswordErrorMessage() {
        if (this.state.confirmPassword && !this.verifyPasswords()) {
            this.setFieldErrorMessage('confirmPassword', 'Passwords do NOT match');
        } else {
            this.clearFieldErrorMessage('confirmPassword');
        }
    }

    isFormValid() {
        const { email, password } = this.state;
        this.validateField('email', email);
        this.validateField('password', password);

        return this.state.isEmailValid && this.state.isPasswordValid && this.verifyPasswords();
    }

    verifyPasswords() {
        return this.state.password === this.state.confirmPassword;
    }

    getButtonLabel(isFetchingData) {
        return isFetchingData ? 'Signing up...' : 'Sign Up';
    }

    validateField(fieldName, value) {
        this.setConfirmPasswordErrorMessage();
        let { isEmailValid, isPasswordValid } = this.state;
        switch (fieldName) {
            case 'email':
                isEmailValid = value.length > 0;
                this.setFieldErrorMessage('email', isEmailValid ? '' : 'email field is required');
                this.setState({ isEmailValid });
                break;
            case 'password':
                isPasswordValid = value.length > 0;
                this.setFieldErrorMessage(
                    'password',
                    isPasswordValid ? '' : 'password field is required'
                );
                this.setState({ isPasswordValid });
                break;
            default:
                break;
        }
    }

    setFieldErrorMessage(fieldName, message) {
        let formErrors = { ...this.state.formErrors };
        formErrors[fieldName] = message;
        this.setState({ formErrors });
    }

    clearFieldErrorMessage(fieldName) {
        let formErrors = { ...this.state.formErrors };
        formErrors[fieldName] = '';
        this.setState({ formErrors });
    }

    render() {
        const { isFetchingData } = this.props;
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
                        {this.getButtonLabel(isFetchingData)}
                    </button>
                    <Link to="/login">Already have account?</Link>
                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    isFetchingData: PropTypes.bool,
    signup: PropTypes.func
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: userData => {
            setTimeout(() => {
                dispatch({ type: 'USER_SIGNUP_SUCCESS' });
            }, 2000);
            dispatch({ type: 'USER_SIGNUP_REQUEST', data: userData });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);
