import React from 'react';
import { shallow } from 'enzyme';

import { ProtectedRoute } from './ProtectedRoute';

describe('ProtectedRoute component', () => {
    it('instantiates the base component', () => {
        const wrapper = shallow(<ProtectedRoute />);
        expect(wrapper).toBeDefined;
    });
});
