import React from 'react';
import SignupForm from '../../components/SignupForm';

class SignupPage extends React.Component {
    render() {
        return (
            <div className="slds-grid slds-grid--vertical">
                <div style={{ margin: '75px auto 10px', width: '540px' }}>
                    <h1 className="slds-text-heading_large">Signup for free account</h1>
                    <div
                        className="slds-m-top_large slds-p-around_x-large"
                        style={{ border: '.15rem solid #eee', borderRadius: '.75rem' }}
                    >
                        <SignupForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupPage;
