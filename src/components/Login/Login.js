import React, { Component } from 'react';
import Button from '../Button/Button';

const handler = () => console.log('ciao');
const Login = () => (
    <form>
        <div className="login">
            <input
                className="input"
                placeholder="Ditta..."
                type="text"
            />
            <input
                className="input"
                placeholder="Telefono..."
                type="tel"
            />
        </div>
        <Button
            handler={ handler }
            text="Conferma"
        />
    </form>
);

export default Login;
