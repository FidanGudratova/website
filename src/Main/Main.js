import React, { Component } from 'react';
import "./Main.css";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ComponentsDiv from "../ComponentsDiv/ComponentsDiv";
import Categories from "../Categories/Categories";
import Pros from "../Pros/Pros";


export default class Main extends Component {
    render() {
        return (
            <div className="main">

                <Header />

                <section>
                    <div>
                        <h2>Buy and Sell anything you want with us</h2>
                    </div>
                    <div className="paragraph">
                        <p className="paragraphh">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    </div>
                    <div className="searchbar">
                        <input className="input-search" type='text' placeholder='Search is here'></input>
                        <button className="search-button">SEARCH</button>
                    </div>

                    <Categories />

                    <h2> ~ COLLECTIONS ~</h2>

                    <ComponentsDiv />

                    <Pros />
                </section>


                <Footer />
            </div>
        )
    }

}
