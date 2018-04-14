import React from 'react';
import renderer from 'react-test-renderer';

import OneAppPage from './OneAppPage';

describe('OneAppPage component', () => {

    it('instantiates the OneAppPage component', () => {
        const component = renderer.create(
            <OneAppPage/>
        );
        expect(component).toBeDefined;
    });
});