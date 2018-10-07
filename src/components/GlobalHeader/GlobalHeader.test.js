import React from 'react';
import { shallow } from 'enzyme';

import GlobalHeader from './GlobalHeader';

describe('GlobalHeader component', () => {
    it('instantiates the TextInput component', () => {
        const wrapper = shallow(
            <GlobalHeader contextUser={{ avatarUrl: 'https://example.com/photo' }} />
        );
        expect(wrapper).toBeDefined;
    });
});
