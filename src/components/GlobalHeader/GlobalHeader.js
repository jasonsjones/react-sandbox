import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import logo from 'sldsImages/logo.svg';

const GlobalHeader = props => {
    return (
        <header className="slds-global-header_container">
            <a href="javascript:void(0);" className="slds-assistive-text slds-assistive-text_focus">
                Skip to Navigation
            </a>
            <a href="javascript:void(0);" className="slds-assistive-text slds-assistive-text_focus">
                Skip to Main Content
            </a>
            <div className="slds-global-header slds-grid slds-grid_align-spread">
                <div className="slds-global-header__item">
                    <div>
                        <SVGInline svg={logo} width="50px" height="50px" />
                    </div>
                </div>
                <div className="slds-grid slds-grid_align-spread">
                    <div className="slds-global-header__item">
                        <span className="slds-avatar slds-avatar_circle slds-avatar_medium">
                            <img
                                alt="user avatar"
                                src={props.contextUser.avatarUrl}
                                title="User avatar"
                            />
                        </span>
                    </div>
                    <div className="slds-global-header__item">
                        <button type="submit" className="slds-button slds-button_brand">
                            Log out
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

GlobalHeader.propTypes = {
    contextUser: PropTypes.object
};

export default GlobalHeader;
