import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from './LoginPage';

describe('LoginPage component', () => {

    it('instantiates the LoginPage component', () => {
        const wrapper = shallow(<LoginPage/>);
        expect(wrapper).toBeDefined;
    });

    it('renders outer div with slds-grid', () => {
        const wrapper = shallow(<LoginPage/>);
        expect(wrapper.find('div').first().hasClass('slds-grid')).toBeTrue;
    });

    it.skip('renders inner divs with slds-size_1-of-2', () => {
        const wrapper = shallow(<LoginPage/>);
        let children = wrapper.find('div').first().children();
        expect(children).toHaveLength(2);
        expect(children.first().hasClass('slds-size_1-of-2')).toBeTrue;
        expect(children.last().hasClass('slds-size_1-of-2')).toBeTrue;
    });
});