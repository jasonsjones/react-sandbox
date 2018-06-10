import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from './LoginPage';

describe('LoginPage component', () => {

    it('instantiates the LoginPage component', () => {
        const wrapper = shallow(<LoginPage/>);
        expect(wrapper).toBeDefined;
    });
});