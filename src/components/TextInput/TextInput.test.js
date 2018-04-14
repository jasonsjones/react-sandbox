import React from 'react';
import renderer from 'react-test-renderer';

import TextInput from './TextInput';

describe('TextInput component', () => {

    it('instantiates the OneAppPage component', () => {
        const component = renderer.create(
            <TextInput />
        );
        expect(component).toBeDefined;
    });
});