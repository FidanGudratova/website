import React, { Component } from 'react';
import "./Footer.css";
export default class Footer extends Component {
    render() {
        return (
            <footer>
                    <div className="details">
                        <div className='.footer-div'>
                            <p className="subs-header">Subscribe to us..</p>
                            <span><input className="mail-input" type="email" placeholder='Email' required ></input></span>
                            <span><button className="submit-btn">SUBMIT</button></span>
                        </div>
                        <div className="footer-div">
                            <span className="footer-span-head">Company </span>
                            <span className="footer-span">About</span>
                            <span className="footer-span">Privacy</span>
                            <span className="footer-span">System</span>
                        </div>
                        <div className="footer-div">
                            <span className="footer-span-head">Politics</span>
                            <span className="footer-span"> User agreement</span>
                            <span className="footer-span"> Contract</span>
                            <span className="footer-span"> Blog</span>
                        </div>
                        <div className="footer-div">
                            <span className="footer-span-head"> Contacts </span>
                            <span className="footer-span"> +994 01 345 46 25</span>
                            <span className="footer-span"> +994 01 345 57 85</span>
                            <span className="footer-span"> info@example.com </span>
                        </div>
                    </div>
                    <span className="year"> c 2023</span>
                </footer>
        )
    }
}