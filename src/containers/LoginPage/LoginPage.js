import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import SVGInline from 'react-svg-inline';

import LoginForm from '../../components/LoginForm';
import 'sldsImages/logo-noname.svg';
import logo from 'sldsImages/logo.svg';

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

const renderLeftSide = () => {
    return (
        <section style={{ width: '400px', margin: '15% auto' }}>
            <div className="slds-grid slds-grid_vertical slds-grid_vertical-align-center">
                <div style={imageStyles}>
                    <SVGInline svg={logo} width="200" />
                </div>
                <section style={loginFormStyles}>
                    <LoginForm />
                </section>
                <div className="slds-grid slds-grid_align-space slds-grid_vertical-align-center slds-m-top_large">
                    <p>Not a Customer?</p>
                    <Link to="/signup">
                        <button
                            type="button"
                            className="slds-button slds-button_neutral slds-m-left_large"
                            style={{ height: '40px', fontSize: '14px' }}
                        >
                            Try for Free
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

const renderLoginPage = () => (
    <div className="slds-grid slds-grid_frame">
        <div className="slds-size_1-of-2 slds-p-horizontal_medium">{renderLeftSide()}</div>
        <div
            className="slds-size_1-of-2 slds-p-horizontal_medium"
            style={{ backgroundColor: '#efefef' }}
        />
    </div>
);

export const LoginPage = props => {
    return props.isAuth ? <Redirect to="/" /> : renderLoginPage();
};

LoginPage.propTypes = {
    isAuth: PropTypes.bool
};

export default connect(state => {
    return {
        isAuth: state.isAuth
    };
})(LoginPage);
