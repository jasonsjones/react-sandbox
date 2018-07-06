import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './TextInput';

describe('TextInput component', () => {
    it('instantiates the TextInput component', () => {
        const wrapper = shallow(<TextInput />);
        expect(wrapper).toBeDefined;
    });

    it('renders with one label with correct text', () => {
        const props = {
            name: 'email',
            type: 'text',
            label: 'Email'
        };
        const wrapper = shallow(<TextInput {...props} />);
        expect(wrapper.find('label')).toHaveLength(1);
        expect(wrapper.find('label').text()).toBe('Email');
    });

    it('renders with one input', () => {
        const props = {
            name: 'email',
            type: 'text',
            label: 'Email'
        };
        const wrapper = shallow(<TextInput {...props} />);
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it('renders an error message if one is present', () => {
        const props = {
            name: 'email',
            type: 'text',
            label: 'Email',
            errorMessage: 'Email is not valid'
        };
        const wrapper = shallow(<TextInput {...props} />);
        expect(wrapper.find('#error-message')).toHaveLength(1);
        expect(wrapper.find('#error-message').text()).toBe('Email is not valid');
    });

    it('does not render an error message if one is not present', () => {
        const props = {
            name: 'email',
            type: 'text',
            label: 'Email'
        };
        const wrapper = shallow(<TextInput {...props} />);
        expect(wrapper.find('#error-message')).toHaveLength(0);
    });
});
