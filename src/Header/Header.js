import React, { Component } from 'react';
import "./Header.css";
export default class Header extends Component {
    render() {
        return (
            <header>
                <span className="navbar-span">Home </span>
                <span className="navbar-span">About </span>
                <span className="navbar-span">Contacts </span>
                <span className="navbar-span">Log In </span>
            </header>
        )
    }
}