import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TextInput from '../TextInput';
import CheckBox from '../CheckBox';

const styles = {
    button: {
        width: '100%',
        height: '2.8rem'
    }
};

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rememberMe: false,
            formErrors: {
                email: '',
                password: ''
            },
            isEmailValid: false,
            isPasswordValid: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
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
    handleCheckboxChange(e) {
        this.setState({
            rememberMe: e.target.checked
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.isFormValid()) {
            console.log('process form submission here...');
            console.log('email: ' + this.state.email);
            console.log('password: ' + this.state.password);
            console.log('remember me?: ' + this.state.rememberMe);
            this.setState({
                email: '',
                password: '',
                isEmailValid: false,
                isPasswordValid: false
            });
            this.props.login();
        }
    }

    isFormValid() {
        const { email, password } = this.state;
        this.validateField('email', email);
        this.validateField('password', password);

        return this.state.isEmailValid && this.state.isPasswordValid;
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let { isEmailValid, isPasswordValid } = this.state;
        switch (fieldName) {
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
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            isEmailValid,
            isPasswordValid
        });
    }

    getButtonLabel(isFetchingData) {
        return isFetchingData ? 'Logging In...' : 'Log In';
    }

    render() {
        const { isFetchingData } = this.props;
        return (
            <div>
                <form
                    className="slds-form slds-form_stacked"
                    style={{ backgroundColor: 'ddd' }}
                    onSubmit={event => this.handleSubmit(event)}
                >
                    <div className="slds-form-element">
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
                            errorMessage={this.state.formErrors.password}
                            label="Password"
                            handleChange={this.handleChange}
                            value={this.state.password}
                        />

                        <button
                            type="submit"
                            className="slds-button slds-button_brand slds-m-top_medium"
                            style={styles.button}
                        >
                            {this.getButtonLabel(isFetchingData)}
                        </button>
                    </div>
                </form>
                <div className="slds-m-top_medium">
                    <CheckBox
                        id="checkbox-rememberme"
                        label="Remember me"
                        handleChange={this.handleCheckboxChange}
                    />
                </div>
                <div
                    className="slds-grid slds-grid_align-spread slds-p-top_medium slds-m-top_medium"
                    style={{ borderTop: '1px solid #ddd' }}
                >
                    <a href="javascript:void(0)">Forgot Your Password?</a>
                    <a href="javascript:void(0)">Use Custom Domain</a>
                </div>
            </div>
        );
    }
}

LoginForm.propTypes = {
    isFetchingData: PropTypes.bool,
    login: PropTypes.func
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: () => {
            setTimeout(() => {
                dispatch({ type: 'AUTH_LOGIN_USER' });
            }, 2000);
            dispatch({ type: 'AUTH_LOGIN_FETCHING' });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
