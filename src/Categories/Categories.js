import React, { Component } from 'react';
import "./Categories.css";
import catImg1 from "../Assets/Imgs/home.jpeg";
import catImg2 from "../Assets/Imgs/techno.jpeg";
import catImg3 from "../Assets/Imgs/smartpho.jpeg";
import catImg4 from "../Assets/Imgs/acs.jpeg";

export default class Categories extends Component {
    state = {
        categories: [
            {
                img: catImg1,
                categoryName: "home & garden"
            },
            {
                img: catImg2,
                categoryName: "home & garden"
            },
            {
                img: catImg3,
                categoryName: "home & garden"
            },
            {
                img: catImg4,
                categoryName: "home & garden"
            },
      
        ]
    }
    render() {
        let {categories} = this.state;
        return (

            <div className="categories-div">
                {
                    categories.map((item) => {
                        return (
                            <div className="category">
                                <img src={item.img} alt="home" className="category-img" />
                                {/* <span className="category-span">{item.categoryName}</span> */}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}