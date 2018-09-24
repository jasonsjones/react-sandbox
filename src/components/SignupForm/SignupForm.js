import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';
import TextInput from '../../components/TextInput';

export class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            isFirstNameValid: false,
            isLastNameValid: false,
            isEmailValid: false,
            isPasswordValid: false
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.isFormValid()) {
            this.props.signup({
                name: {
                    first: this.state.firstName,
                    last: this.state.lastName
                },
                email: this.state.email,
                password: this.state.password
            });
            this.resetState();
        }
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState(
            {
                [name]: value
            },
            () => this.validateField(name, value)
        );
    };

    isFormValid() {
        const { firstName, lastName, email, password } = this.state;
        this.validateField('firstName', firstName);
        this.validateField('lastName', lastName);
        this.validateField('email', email);
        this.validateField('password', password);
        this.validateField('confirmPassword', password);

        return (
            this.state.isFirstNameValid &&
            this.state.isLastNameValid &&
            this.state.isEmailValid &&
            this.state.isPasswordValid &&
            this.verifyPasswords()
        );
    }

    verifyPasswords() {
        return this.state.password === this.state.confirmPassword;
    }

    getButtonLabel(isFetchingData) {
        return isFetchingData ? 'Signing up...' : 'Sign Up';
    }

    resetState() {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            isNameValid: false,
            isEmailValid: false,
            isPasswordValid: false
        });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let { isFirstNameValid, isLastNameValid, isEmailValid, isPasswordValid } = this.state;
        switch (fieldName) {
            case 'firstName':
                isFirstNameValid = value.length > 0;
                fieldValidationErrors.firstName = isFirstNameValid
                    ? ''
                    : 'first name field is required';
                break;
            case 'lastName':
                isLastNameValid = value.length > 0;
                fieldValidationErrors.lastName = isLastNameValid
                    ? ''
                    : 'last name field is required';
                break;
            case 'email':
                isEmailValid = value.length > 0;
                fieldValidationErrors.email = isEmailValid ? '' : 'email field is required';
                break;
            case 'password':
                isPasswordValid = value.length > 0;
                fieldValidationErrors.password = isPasswordValid
                    ? ''
                    : 'password field is required';
                break;
            case 'confirmPassword':
                fieldValidationErrors.confirmPassword = this.verifyPasswords()
                    ? ''
                    : 'passwords do NOT match';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            isFirstNameValid,
            isLastNameValid,
            isEmailValid,
            isPasswordValid
        });
    }

    render() {
        const { isFetchingData } = this.props;
        return (
            <form className="slds-form slds-form_compound" onSubmit={this.handleSubmit}>
                <fieldset className="slds-form-element">
                    <legend className="slds-form-element__label slds-form-element__legend slds-text-title_caps">
                        Name
                    </legend>
                    <div className="slds-form-element__group">
                        <div className="slds-form-element__row">
                            <div className="slds-size_1-of-2 slds-p-right_x-small">
                                <TextInput
                                    type="text"
                                    size="large"
                                    name="firstName"
                                    label="First"
                                    errorMessage={this.state.formErrors.firstName}
                                    handleChange={this.handleChange}
                                    value={this.state.firstName}
                                />
                            </div>
                            <div className="slds-size_1-of-2 slds-p-left_x-small">
                                <TextInput
                                    type="text"
                                    size="large"
                                    name="lastName"
                                    label="Last"
                                    errorMessage={this.state.formErrors.lastName}
                                    handleChange={this.handleChange}
                                    value={this.state.lastName}
                                />
                            </div>
                        </div>
                    </div>
                </fieldset>
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signup: userData => {
            setTimeout(() => {
                dispatch(actions.userSignupSuccess());
                ownProps.handleSignupSuccess();
            }, 2000);
            dispatch(actions.userSignupRequest(userData));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);
