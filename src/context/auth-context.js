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
            isAuth: false
        };
        this.login = this.login.bind(this);
    }

    login() {
        setTimeout(() => {
            this.setState({ isAuth: true });
        }, 2000);
    }

    render() {
        return (
            <AuthContext.Provider value={{
                isAuth: this.state.isAuth,
                login: this.login
            }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }

}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };