import React from 'react';
import { shallow } from 'enzyme';

import { OneAppPage } from './OneAppPage';

const contextUser = {
    name: 'Barry Allen',
    email: 'barry@starlabs.com'
};

global.fetch = jest.fn().mockImplementation(() => {
    const p = new Promise(resolve => {
        resolve({
            ok: true,
            json: () => {
                return { message: 'mocked response', version: '0.2.11' };
            }
        });
    });
    return p;
});

describe('OneAppPage component', () => {
    it('instantiates the OneAppPage component', () => {
        const wrapper = shallow(<OneAppPage contextUser={contextUser} />);
        expect(wrapper).toBeDefined;
        expect(wrapper.exists()).toBeTrue;
    });

    it('includes one <GlobalHeader/> component', () => {
        const wrapper = shallow(<OneAppPage contextUser={contextUser} />);
        expect(wrapper.find('GlobalHeader')).toHaveLength(1);
    });

    it('includes one h1 tag', () => {
        const wrapper = shallow(<OneAppPage contextUser={contextUser} />);
        expect(wrapper.find('h1')).toHaveLength(3);
    });
});
