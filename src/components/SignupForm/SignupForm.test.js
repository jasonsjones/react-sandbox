import React from 'react';
import { shallow } from 'enzyme';

import { SignupForm } from './SignupForm';

describe('SignupForm component', () => {
    it('instantiates the SignupForm component', () => {
        const wrapper = shallow(<SignupForm />);
        expect(wrapper).toBeDefined;
    });
});
