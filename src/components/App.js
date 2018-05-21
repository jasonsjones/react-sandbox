import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import OneAppPage from './OneAppPage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';

import 'sldsCss/salesforce-lightning-design-system.min.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: true
        };
    }
    render() {
        const { isAuthenticated } = this.state;
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={() => (isAuthenticated ? <OneAppPage/> : <LoginPage />)} />
                    <Route exact path='/login' component={LoginPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}