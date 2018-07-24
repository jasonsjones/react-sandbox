import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = props => {
    const { component: Component, isAuth, ...rest } = props;
    return <Route render={() => (isAuth ? <Component {...rest} /> : <Redirect to="/login" />)} />;
};

ProtectedRoute.propTypes = {
    component: PropTypes.func,
    isAuth: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    };
};

export default connect(mapStateToProps)(ProtectedRoute);
