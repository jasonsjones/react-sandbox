import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AuthProvider } from '../context/auth-context';
import ProtectedRoute from './ProtectedRoute';
import OneAppPage from './OneAppPage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';

import 'sldsCss/salesforce-lightning-design-system.min.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <AuthProvider>
                    <Switch>
                        <ProtectedRoute exact path="/" component={OneAppPage} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </AuthProvider>
            </BrowserRouter>
        );
    }
}
