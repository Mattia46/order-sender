import React, { Component } from 'react';

const Button = data => {
    const {
        handler,
        text = 'ciao',
    } = data;
    return (
        <button
            className="button"
            onClick={data.handler}
            type="button"
        >
            {data.text}
        </button>
    );
};

export default Button;
