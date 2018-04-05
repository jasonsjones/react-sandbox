import React from 'react';

import LoginForm from './LoginForm';
import 'sldsImages/logo-noname.svg';

const LeftSide = () => {
    const loginFormStyles = {
        width: '400px',
        margin: '0 auto',
        padding: '2rem',
        border: '1px solid #ccc',
        borderRadius: '8px'
    };

    const imageStyles = {
        margin: '150px auto 10px',
        display: 'block',
        height: '200px',
        width: '200px'
    };

    return (
        <div>
            <section>
                <img src="assets/images/logo-noname.svg" style={imageStyles}/>
            </section>
            <section style={loginFormStyles}>
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