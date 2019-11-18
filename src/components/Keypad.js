import React, { Component } from 'react';

export default class Keypad extends React.Component {
 
    passwordInput = () => {
        console.log('Entering password...')
    }

    render() {
        return (
        <div>
            <input 
            type="password" 
            onKeyUp={this.passwordInput}
            />
        </div>
        )
    }
}