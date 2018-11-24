import React, { Component } from 'react';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import logo from '../../../assets/logo.png';

class Main extends Component {
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
