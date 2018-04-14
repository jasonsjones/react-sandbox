import React from 'react';
import renderer from 'react-test-renderer';

import LoginPage from './LoginPage';

describe('LoginPage component', () => {

    it('instantiates the LoginPage component', () => {
        const component = renderer.create(
            <LoginPage/>
        );
        expect(component).toBeDefined;
    });
});