import React from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext();

class AuthProvider extends React.Component {
    static propTypes = {
        children: PropTypes.element.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            isAuth: false,
            fetchingData: false
        };
        this.login = this.login.bind(this);
        this.logoff = this.logoff.bind(this);
    }

    login() {
        this.setState({ fetchingData: true });
        setTimeout(() => {
            this.setState({
                isAuth: true,
                fetchingData: false
            });
        }, 2000);
    }

    logoff() {
        this.setState({ fetchingData: true });
        setTimeout(() => {
            this.setState({
                isAuth: false,
                fetchingData: false
            });
        }, 1000);
    }

    render() {
        return (
            <AuthContext.Provider value={{
                isAuth: this.state.isAuth,
                fetchingData: this.state.fetchingData,
                login: this.login
            }}
            >
                {this.props.children}
            </AuthContext.Provider>
        );
    }

}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };