import React, { Component } from 'react';
import "./Pros.css";
import icon1 from "../Assets/Icons/Icon 1.svg";
import icon2 from "../Assets/Icons/Icon 2.svg";
import icon3 from "../Assets/Icons/Icon 3.svg";


export default class Pros extends Component {

    render() {
        return (
            <div className="pros">
                <span className="pros-span"> OUR SUPERIORITIES </span>
                <span className="pros-span-happy"> HAPPY SHOPPING </span>
                <div className="pros-div">
                    <div className="pros-item">
                        <img className="img-icon" src={icon1} alt="icon1" />
                        <span className="pros-item-header"> Security & Data privacy </span>
                        <span className="pros-item-body"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. </span>
                    </div>
                    <div className="pros-item">
                        <img className="img-icon" src={icon2} alt="icon2" />
                        <span className="pros-item-header"> High quality & fast website </span>
                        <span className="pros-item-body"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed sed diam nonumy. </span>
                    </div>
                    <div className="pros-item">
                        <img className="img-icon" src={icon3} alt="icon3" />
                        <span className="pros-item-header"> 7/24 support line </span>
                        <span className="pros-item-body"> Lorem ipsum dolor sit amet,  sit sit consetetur sadipscing elitr, sed diam nonumy. </span>
                    </div>
                </div>
            </div>


        )
    }
}