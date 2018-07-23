import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
    const { component: Component, isAuth, ...rest } = props;
    return (
        <Route
            render={() => (isAuth ? <Component {...props} /> : <Redirect to="/login" />)}
            {...rest}
        />
    );
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
