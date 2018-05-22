import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AuthContext } from '../context/auth-context';
import OneAppPage from './OneAppPage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';

import 'sldsCss/salesforce-lightning-design-system.min.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.setAuthenticated = this.setAuthenticated.bind(this);
        this.state = {
            isAuthenticated: false,
            setAuthenticated: this.setAuthenticated
        };
    }

    setAuthenticated(value) {
        this.setState({
            isAuthenticated: value
        });
    }

    render() {
        const { isAuthenticated } = this.state;
        return (
            <AuthContext.Provider value={this.state}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' render={() => (isAuthenticated ? <OneAppPage/> : <LoginPage />)} />
                        <Route exact path='/login' component={LoginPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </BrowserRouter>
            </AuthContext.Provider>
        );
    }
}