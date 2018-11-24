import React, { Component } from 'react';
import Button from '../Button/Button';

const handler = () => console.log('ciao');
const Login = () => (
    <form className="login">
        <h2> Ciao</h2>
        <input
            placeholder="Ditta..."
            type="text"
        />
        <input
            placeholder="Telefono..."
            type="tel"
        />
        <Button
            handler={ handler }
            text="Conferma"
        />
    </form>
);

export default Login;
