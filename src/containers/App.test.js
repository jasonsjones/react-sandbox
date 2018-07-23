import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('instantiates the base component', () => {
        expect(wrapper).toBeDefined;
    });

    it('has one <BrowserRouter/> component', () => {
        expect(wrapper.find('BrowserRouter')).toHaveLength(1);
    });

    it('has two <Route /> component', () => {
        expect(wrapper.find('Route')).toHaveLength(2);
    });
});
