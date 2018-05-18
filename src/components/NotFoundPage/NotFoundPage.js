import React from 'react';
import SVGInline from 'react-svg-inline';
import errorSVG from 'sldsIcons/utility/error.svg';

const NotFoundPage = () => {
    return (
        <div style={{ width: '960px', margin: '5rem auto 0'}}>
            <h1 className="slds-text-heading_large">
                <SVGInline className="slds-m-right_medium" svg={errorSVG} width="50px" height="50px" fill="#f00" cleanup={["fill"]} />
                404 &mdash; Page Not Found
            </h1>
        </div>
    );
};

export default NotFoundPage;