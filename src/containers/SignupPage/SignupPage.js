import React from 'react';
import PropTypes from 'prop-types';
import SignupForm from '../../components/SignupForm';

class SignupPage extends React.Component {
    handleSignupSuccess = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="slds-grid slds-grid--vertical">
                <div style={{ margin: '75px auto 10px', width: '540px' }}>
                    <h1 className="slds-text-heading_large">Signup for free account</h1>
                    <div
                        className="slds-m-top_large slds-p-around_x-large"
                        style={{ border: '.15rem solid #eee', borderRadius: '.75rem' }}
                    >
                        <SignupForm handleSignupSuccess={this.handleSignupSuccess} />
                    </div>
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    history: PropTypes.object
};

export default SignupPage;
