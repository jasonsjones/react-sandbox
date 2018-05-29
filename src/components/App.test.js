import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App component', () => {

    it('instantiates the base component', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toBeDefined;
    });

    it('has one <BrowserRouter/> component', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('BrowserRouter')).toHaveLength(1);
    });

    it.skip('has three <Route /> component', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('Route')).toHaveLength(3);
    });
});