import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GlobalHeader from '../../components/GlobalHeader';

export const OneAppPage = props => {
    return (
        <div>
            <GlobalHeader />
            <div style={{ width: '960px', margin: '5rem auto 0' }}>
                <h1 className="slds-text-heading_large">Hello {props.contextUser.name}</h1>
            </div>
        </div>
    );
};

OneAppPage.propTypes = {
    contextUser: PropTypes.object
};

const mapStateToProps = state => {
    return {
        contextUser: state.contextUser
    };
};

export default connect(mapStateToProps)(OneAppPage);
