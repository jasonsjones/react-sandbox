import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import OneAppPage from './OneAppPage';
import LoginPage from './LoginPage';

import 'sldsCss/salesforce-lightning-design-system.min.css';

const App = () => {
    const isAuthenticated = true;
    return (
        <BrowserRouter>
            <div>
                <Route exact path='/' render={() => (isAuthenticated ? <OneAppPage/> : <LoginPage />)} />
                <Route exact path='/login' component={LoginPage} />
            </div>
        </BrowserRouter>
    );
};

export default App;