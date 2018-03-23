import React from 'react';

const LoginPage = () => {
    return (
        <div className="slds-grid slds-grid_frame">
            <div className="slds-size_1-of-2 slds-p-horizontal_medium">
                <h1 className="slds-text-heading_large">LoginPage Left Column</h1>
            </div>
            <div className="slds-size_1-of-2 slds-p-horizontal_medium" style={{backgroundColor: "#efefef"}}>
                <h1 className="slds-text-heading_large">LoginPage Right Column</h1>
            </div>
        </div>
    );
};

export default LoginPage;