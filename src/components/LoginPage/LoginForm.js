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
        super(props)
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('process form submission here...');
        console.log('email: ' + this.state.email);
        console.log('password: ' + this.state.password);
        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        return (
            <form className="slds-form slds-form_stacked" style={{backgroundColor: 'ddd'}} onSubmit={this.handleSubmit}>
                <div className="slds-form-element">

                    <TextInput type="text" size="large" name="email"
                        label="Email" handleChange={this.handleChange} value={this.state.email}/>

                    <TextInput type="password" size="large" name="password"
                        label="Password" handleChange={this.handleChange} value={this.state.password}/>

                    <button type="submit" className="slds-button slds-button_brand slds-m-top_medium" style={styles.button}>Log In</button>

                </div>
            </form>
        );
    }
}

export default LoginForm;