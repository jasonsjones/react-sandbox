import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';
import GlobalHeader from '../../components/GlobalHeader';

export class OneAppPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div>
                <GlobalHeader />
                <div style={{ width: '960px', margin: '5rem auto 0' }}>
                    <h1 className="slds-text-heading_large">Hello {this.props.contextUser.name}</h1>
                    {!this.props.error && (
                        <div>
                            <h1
                                style={{ marginTop: '30px' }}
                                className="slds-text-heading_large slds-text-color_weak"
                            >
                                Message: {this.props.message}
                            </h1>
                            <h1 className="slds-text-heading_large slds-text-color_weak">
                                Version: {this.props.version}
                            </h1>
                        </div>
                    )}
                    {this.props.error && (
                        <h3
                            style={{ marginTop: '50px' }}
                            className="slds-text-heading_medium slds-text-color_error"
                        >
                            {this.props.error}
                        </h3>
                    )}
                </div>
            </div>
        );
    }
}

OneAppPage.propTypes = {
    contextUser: PropTypes.object,
    message: PropTypes.string,
    version: PropTypes.string,
    error: PropTypes.string,
    getData: PropTypes.func
};

const mapStateToProps = state => {
    return {
        contextUser: state.contextUser,
        message: state.message,
        version: state.version
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(actions.getData())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OneAppPage);
