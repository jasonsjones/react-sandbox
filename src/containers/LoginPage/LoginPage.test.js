import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from './LoginPage';

describe('LoginPage component', () => {
    it('instantiates the LoginPage component', () => {
        const wrapper = shallow(<LoginPage />);
        expect(wrapper).toBeDefined;
    });

    it('renders the login form if the user is not authenticated', () => {
        const wrapper = shallow(<LoginPage isAuth={false} />);
        expect(wrapper.find('Connect(LoginForm)')).toHaveLength(1);
    });

    it('renders a Redirect if the user is authenticated', () => {
        const wrapper = shallow(<LoginPage isAuth={true} />);
        expect(wrapper.find('Redirect')).toHaveLength(1);
    });
});
