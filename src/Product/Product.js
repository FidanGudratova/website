import React, { Component } from 'react';
import "./Main.css";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ComponentsDiv from "../ComponentsDiv/ComponentsDiv";
import Pros from "../Pros/Pros";


export default class Main extends Component {
    render() {
        return (
            <div className="main">

                <Header />

                <section>
                    <div className="searchbar">
                        <input className="input-search" type='text' placeholder='Search is here'></input>
                        <button className="search-button">SEARCH</button>
                    </div>


                    <ComponentsDiv />

                    <Pros />
                </section>


                <Footer />
            </div>
        )
    }

}
