import React from 'react';
import TextInput from '../TextInput';

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
            formErrors: {
                email: '',
                password: ''
            },
            isEmailValid: false,
            isPasswordValid: false,
            isFormValid: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        }, () => this.validateField(name, value));
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.isFormValid) {
            console.log('process form submission here...');
            console.log('email: ' + this.state.email);
            console.log('password: ' + this.state.password);
            this.setState({
                email: '',
                password: '',
                isEmailValid: false,
                isPasswordValid: false,
                isFormValid: false
            });
        }
    }

    isFormValid() {
        this.setState({
            isFormValid: this.state.isEmailValid && this.state.isPasswordValid
        });
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
            fieldValidationErrors.password = isPasswordValid ? '' : 'password field is required';
            break;
        default:
            break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            isEmailValid,
            isPasswordValid
        }, this.isFormValid);
    }

    render() {
        return (
            <form className="slds-form slds-form_stacked" style={{backgroundColor: 'ddd'}} onSubmit={this.handleSubmit}>
                <div className="slds-form-element">

                    <TextInput type="text" size="large" name="email" errorMessage={this.state.emailErrorMessage}
                        label="Email" handleChange={this.handleChange} value={this.state.email}/>

                    <TextInput type="password" size="large" name="password" errorMessage={this.state.passwordErrorMessage}
                        label="Password" handleChange={this.handleChange} value={this.state.password}/>

                    <button type="submit" disabled={!this.state.isFormValid} className="slds-button slds-button_brand slds-m-top_medium" style={styles.button}>Log In</button>

                </div>
            </form>
        );
    }
}

export default LoginForm;