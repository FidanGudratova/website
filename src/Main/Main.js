import React, { Component } from 'react';
import "./Main.css";
import logoImg from "../Assets/Imgs/logo.jpeg";
import catImg1 from "../Assets/Imgs/home.jpeg";
import catImg2 from "../Assets/Imgs/techno.jpeg";
import catImg3 from "../Assets/Imgs/smartpho.jpeg";
import catImg4 from "../Assets/Imgs/acs.jpeg";

import Footer from '../Footer/Footer';
import ComponentsDiv from "../ComponentsDiv/ComponentsDiv"

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <header>             
                    <img src={logoImg} className='logo' alt='logo'/>
                    <div className="navbar">
                        <span className="navbar-span">Home </span>
                        <span className="navbar-span">About </span>
                        <span className="navbar-span">Contacts </span>
                        <span className="navbar-span">Log In </span>
                    </div>
                </header>

                <section>
                    <div className="searchbar">
                        <input className="input-search" type='text' placeholder='Search is here'></input>
                        <button className="search-button">SEARCH</button>
                    </div>
                    <div className="categories-div">
                        <div className="category">
                            <img className="category-img" src={catImg1} alt="home" />
                        </div>
                        <div className="category">
                            <img className="category-img" src={catImg2} alt="tech" />   
                        </div>
                        <div className="category">
                            <img className="category-img" src={catImg3} alt="smartphone" />
                        </div>
                        <div className="category">
                            <img className="category-img" src={catImg4} alt="acs" />   
                        </div>

                    </div>

                    <ComponentsDiv />

                    <div className="pros">
                        <span className="pros-span"> OUR SUPERIORITIES </span>
                        <span className="pros-span-happy"> HAPPY SHOPPING </span>
                        <div className="pros-div">
                            <div className="pros-item">
                                {/* <img className="img-icon" src="" alt=""> icon</img> */}
                                <span className="pros-item-header"> Security & Data privacy </span>
                                <span className="pros-item-body"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. </span>
                            </div>
                            <div className="pros-item">
                                {/* <img className="img-icon" src="" alt=""> icon </img> */}
                                <span className="pros-item-header"> High quality & fast website </span>
                                <span className="pros-item-body"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. </span>
                            </div>
                            <div className="pros-item">
                                {/* <img className="img-icon" src="" alt=""> icon</img> */}
                                <span className="pros-item-header"> 7/24 support line </span>
                                <span className="pros-item-body"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. </span>
                            </div>
                        </div>
                    </div>
                </section>


                <Footer />
            </div>
        )
    }

}
