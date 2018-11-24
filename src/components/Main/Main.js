import React, { Component } from 'react';
import Login from '../Login/Login';
import img from '../../../assets/logo.png';

class Main extends Component {
    render() {
        return (
            <div>
                <img src={img} alt="logo" className="logo" />
                <Login />
            </div>
        );
    }
};

export default Main;
