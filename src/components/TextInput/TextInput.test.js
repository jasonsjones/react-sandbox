import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './TextInput';

describe('TextInput component', () => {

    it('instantiates the TextInput component', () => {
        const wrapper = shallow(<TextInput/>);
        expect(wrapper).toBeDefined;
    });

    it('renders with one label with correct text', () => {
        const wrapper = shallow(<TextInput label="Email" />);
        expect(wrapper.find('label')).toHaveLength(1);
        expect(wrapper.find('label').text()).toBe('Email');
    });

    it('renders with one input', () => {
        const wrapper = shallow(<TextInput label="Email" />);
        expect(wrapper.find('input')).toHaveLength(1);
    });
});