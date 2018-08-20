import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import OneAppPage from './OneAppPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import NotFoundPage from './NotFoundPage';

import 'sldsCss/salesforce-lightning-design-system.min.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <ProtectedRoute exact path="/" component={OneAppPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/signup" component={SignupPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}
