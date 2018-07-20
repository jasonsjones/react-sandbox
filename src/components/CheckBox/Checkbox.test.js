import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';

describe('Checkbox component', () => {
    it('instantiates the Checkbox component', () => {
        const wrapper = shallow(<Checkbox />);
        expect(wrapper).toBeDefined;
    });

    it('renders with one label with correct text', () => {
        const props = {
            id: 'checkbox-1',
            label: 'Remember me'
        };
        const wrapper = shallow(<Checkbox {...props} />);
        expect(wrapper.find('label')).toHaveLength(1);
        expect(wrapper.find('label').text()).toBe(props.label);
    });

    it('renders with one input', () => {
        const props = {
            id: 'checkbox-1',
            label: 'Remember me'
        };
        const wrapper = shallow(<Checkbox {...props} />);
        expect(wrapper.find('input')).toHaveLength(1);
    });
});
