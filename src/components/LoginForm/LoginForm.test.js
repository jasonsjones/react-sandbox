import React from 'react';
import { shallow } from 'enzyme';

import { LoginForm } from './LoginForm';

describe('LoginForm component', () => {
    it('instantiates the LoginForm component', () => {
        const wrapper = shallow(<LoginForm />);
        expect(wrapper).toBeDefined;
    });
});
