import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { AuthConsumer } from '../context/auth-context';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <AuthConsumer>
        {({ isAuth }) => (
            <Route render={ props =>
                isAuth ? <Component {...props} /> : <Redirect to='/login'/>
            }
            {...rest}
            />
        )}
    </AuthConsumer>
);

ProtectedRoute.propTypes = {
    component: PropTypes.func
};

export default ProtectedRoute;