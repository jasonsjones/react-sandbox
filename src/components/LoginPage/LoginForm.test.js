import React from 'react';
import renderer from 'react-test-renderer';

import LoginForm from './LoginForm';

describe('LoginForm component', () => {

    it('instantiates the LoginForm component', () => {
        const component = renderer.create(
            <LoginForm/>
        );
        expect(component).toBeDefined;
    });
});