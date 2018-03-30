import React from 'react';

import LoginForm from './LoginForm';

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