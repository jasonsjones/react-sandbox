import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';
import GlobalHeader from '../../components/GlobalHeader';
import Spinner from '../../components/Spinner';

export class OneAppPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getData();
    }

    handleLogout = () => {
        this.props.userLogout();
    };

    render() {
        const { contextUser, isFetchingData, message, version, error } = this.props;
        return (
            <div>
                <GlobalHeader contextUser={contextUser} handleLogout={this.handleLogout} />
                <div style={{ width: '960px', margin: '5rem auto 0' }}>
                    <h1 className="slds-text-heading_large">
                        Hello
                        {` ${contextUser.name.first} ${contextUser.name.last}`}
                    </h1>
                    {isFetchingData && <Spinner />}

                    {!error &&
                        !isFetchingData && (
                            <div>
                                <h1
                                    style={{ marginTop: '30px' }}
                                    className="slds-text-heading_large slds-text-color_weak"
                                >
                                    Message: {message}
                                </h1>
                                <h1 className="slds-text-heading_large slds-text-color_weak">
                                    Version: {version}
                                </h1>
                            </div>
                        )}
                    {error && (
                        <h3
                            style={{ marginTop: '50px' }}
                            className="slds-text-heading_medium slds-text-color_error"
                        >
                            {error}
                        </h3>
                    )}
                </div>
            </div>
        );
    }
}

OneAppPage.propTypes = {
    isFetchingData: PropTypes.bool,
    contextUser: PropTypes.object,
    message: PropTypes.string,
    version: PropTypes.string,
    error: PropTypes.string,
    getData: PropTypes.func,
    userLogout: PropTypes.func
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData,
        contextUser: state.contextUser,
        message: state.message,
        version: state.version
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(actions.getData()),
        userLogout: () => dispatch(actions.userLogout())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OneAppPage);
