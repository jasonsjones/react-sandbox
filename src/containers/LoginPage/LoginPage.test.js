import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from './LoginPage';

const createComponent = isAuth => {
    const outer = shallow(<LoginPage />);
    const Children = outer.props().children({ isAuth });
    return shallow(Children);
};

describe('LoginPage component', () => {
    it('instantiates the LoginPage component', () => {
        const wrapper = createComponent(false);
        expect(wrapper).toBeDefined;
    });

    it('renders the login form if the user is not authenticated', () => {
        const wrapper = createComponent(false);
        expect(wrapper.find('LoginForm')).toHaveLength(1);
    });

    it('renders a Redirect if the user is authenticated');
});
