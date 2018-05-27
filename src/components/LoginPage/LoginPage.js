import React from 'react';
import { Redirect } from 'react-router-dom';
import SVGInline from 'react-svg-inline';

import { AuthConsumer } from '../../context/auth-context';
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
        width: '50%'
    };

    return (
        <section style={{ width: '400px', margin: '25% auto' }}>
            <div className="slds-grid slds-grid_vertical slds-grid_vertical-align-center">
                <div style={imageStyles} >
                    <SVGInline svg={logo} width="200" />
                </div>
                <section style={loginFormStyles}>
                    <LoginForm />
                </section>
            </div>
        </section>
    );
};

const renderLoginPage = () => (
    <div className="slds-grid slds-grid_frame">
        <div className="slds-size_1-of-2 slds-p-horizontal_medium">
            <LeftSide />
        </div>
        <div className="slds-size_1-of-2 slds-p-horizontal_medium" style={{ backgroundColor: "#efefef" }}>
        </div>
    </div>
);

const LoginPage = () => {
    return (
        <AuthConsumer>
            {({ isAuth }) => (
                isAuth ? (
                    <Redirect to='/'/>
                ) : (
                    renderLoginPage()
                )
            )}
        </AuthConsumer>
    );
};

export default LoginPage;