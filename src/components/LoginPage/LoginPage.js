import React from 'react';
import SVGInline from 'react-svg-inline';

import LoginForm from './LoginForm';
import 'sldsImages/logo-noname.svg';
import logo from 'sldsImages/logo.svg';

const LeftSide = () => {
    const loginFormStyles = {
        width: '400px',
        margin: '0 auto',
        padding: '2rem',
        border: '1px solid #ccc',
        borderRadius: '8px'
    };

    const imageStyles = {
        margin: '150px 38% 10px'
    };

    return (
        <div>
            <section style={imageStyles}>
                <SVGInline svg={logo} width="200px" height="200px" />
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