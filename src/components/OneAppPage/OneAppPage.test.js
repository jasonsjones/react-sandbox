import React from 'react';
import { shallow } from 'enzyme';

import OneAppPage from './OneAppPage';

describe('OneAppPage component', () => {

    it('instantiates the OneAppPage component', () => {
        const wrapper = shallow(<OneAppPage/>);
        expect(wrapper).toBeDefined;
        expect(wrapper.exists()).toBeTrue;
    });

    it('includes one <GlobalHeader/> component', () => {
        const wrapper = shallow(<OneAppPage/>);
        expect(wrapper.find('GlobalHeader')).toHaveLength(1);
    });

    it('includes one h1 tag', () => {
        const wrapper = shallow(<OneAppPage/>);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});