import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('App component', () => {

    it('instantiates the base component', () => {
        const component = renderer.create(
            <App/>
        );
        expect(component).toBeDefined;
    });
});