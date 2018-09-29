import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GlobalHeader from '../../components/GlobalHeader';

export class OneAppPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            version: '',
            error: null
        };
    }
    componentDidMount() {
        fetch('http://localhost:3000/api', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    message: data.message,
                    version: data.version,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            });
    }

    render() {
        return (
            <div>
                <GlobalHeader />
                <div style={{ width: '960px', margin: '5rem auto 0' }}>
                    <h1 className="slds-text-heading_large">Hello {this.props.contextUser.name}</h1>
                    {!this.state.error && (
                        <div>
                            <h1
                                style={{ marginTop: '30px' }}
                                className="slds-text-heading_large slds-text-color_weak"
                            >
                                Message: {this.state.message}
                            </h1>
                            <h1 className="slds-text-heading_large slds-text-color_weak">
                                Version: {this.state.version}
                            </h1>
                        </div>
                    )}
                    {this.state.error && (
                        <h3
                            style={{ marginTop: '50px' }}
                            className="slds-text-heading_medium slds-text-color_error"
                        >
                            {this.state.error}
                        </h3>
                    )}
                </div>
            </div>
        );
    }
}

OneAppPage.propTypes = {
    contextUser: PropTypes.object
};

const mapStateToProps = state => {
    return {
        contextUser: state.contextUser
    };
};

export default connect(mapStateToProps)(OneAppPage);
