import React from 'react';
import TextInput from '../TextInput';

const LoginForm = () => {
    return (
        <div className="slds-form slds-form_stacked" style={{backgroundColor: 'ddd'}}>
            <div className="slds-form-element">

                <TextInput type="text" size="large" id="text-input-id-1" label="Username"/>
                <TextInput type="password" size="large" id="text-input-id-2" label="Password"/>

                <button type="submit" className="slds-button slds-button_brand slds-m-top_medium" style={{ width: '100%', height: '2.8rem' }}>Log In</button>

            </div>
        </div>
    );
};

const LeftSide = () => {
    const css = {
        width: '400px',
        margin: '300px auto 0',
        padding: '2rem',
        border: '1px solid #ccc',
        borderRadius: '8px'
    };

    return (
        <div>
            <section style={css}>
                <LoginForm/>
            </section>
        </div>
    );
};

const LoginPage = () => {
    return (
        <div className="slds-grid slds-grid_frame">
            <div className="slds-size_1-of-2 slds-p-horizontal_medium">
                <LeftSide />
            </div>
            <div className="slds-size_1-of-2 slds-p-horizontal_medium" style={{ backgroundColor: "#efefef" }}>
            </div>
        </div>
    );
};

export default LoginPage;