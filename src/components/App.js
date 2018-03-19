import React from 'react';

import 'sldsCss/salesforce-lightning-design-system.min.css';
import 'sldsImages/logo.svg';

const GlobalHeader = () => {
    return (
        <header className="slds-global-header_container">
            <a href="javascript:void(0);" className="slds-assistive-text slds-assistive-text_focus">Skip to Navigation</a>
            <a href="javascript:void(0);" className="slds-assistive-text slds-assistive-text_focus">Skip to Main Content</a>
            <div className="slds-global-header slds-grid slds-grid_align-spread">
                <div className="slds-global-header__item">
                    <div className="slds-global-header__logo">
                    </div>
                </div>
            </div>
        </header>
    );
};

const App = () => {
    return (
        <div>
            <GlobalHeader />
            <div style={{ width: '960px', margin: '5rem auto 0'}}>
                <h1 className="slds-text-heading_large">Hello React Sandbox!</h1>
            </div>
        </div>
    );
};

export default App;