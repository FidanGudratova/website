import React, { Component } from 'react';
import "./Categories.css";
import catImg1 from "../Assets/Imgs/gaden.png";
import catImg2 from "../Assets/Imgs/phone.png";
import catImg3 from "../Assets/Imgs/add.png";
import catImg4 from "../Assets/Imgs/carr.png";

export default class Categories extends Component {
    state = {
        categories: [
            {
                img: catImg1,
                categoryName: "Home"
            },
            {
                img: catImg2,
                categoryName: "Electronics"
            },
            {
                img: catImg4,
                categoryName: "Cars"
            },
            {
                img: catImg3,
                categoryName: "Others"
            }
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
                                <span className="category-span">{item.categoryName}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}