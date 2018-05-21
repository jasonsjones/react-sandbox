import React from 'react';

import GlobalHeader from '../GlobalHeader';

const OneAppPage = () => {
    return (
        <div>
            <GlobalHeader />
            <div style={{ width: '960px', margin: '5rem auto 0'}}>
                <h1 className="slds-text-heading_large">Hello React Sandbox!</h1>
            </div>
        </div>
    );
};

export default OneAppPage;