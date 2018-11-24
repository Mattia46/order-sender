import React, { Component } from 'react';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import logo from '../../../assets/logo.png';

class Main extends Component {
    componentWillMount() {
        const user = window.localStorage.getItem('user');
        if ('user') {
            console.log('user is: ', user);
        } else {
            console.log('no use: ');
        }
    }

    render() {
        return (
            <div className="container">
                <img src={logo} alt="logo" className="logo" />
                <Login />
                <Footer />
            </div>
        );
    }
};

export default Main;
