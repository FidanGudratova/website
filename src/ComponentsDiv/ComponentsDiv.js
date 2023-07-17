import React, { Component } from 'react';
import "./ComponentsDiv.css";
import compImg1 from "../Assets/Imgs/1.png";
import compImg2 from "../Assets/Imgs/2.png";
import compImg3 from "../Assets/Imgs/3.png";
import compImg4 from "../Assets/Imgs/4.png";

export default class ComponentsDiv extends Component {
    state = {
        components: [
            {
                img: compImg1,
                componentName: "Divan",
                componentPrice: "50$"
            },
            {
                img: compImg2,
                componentName: "Mawin",
                componentPrice: "20$"
            },
            {
                img: compImg3,
                componentName: "Qulaqciq",
                componentPrice: "30$"
            },
            {
                img: compImg4,
                componentName: "Telefon",
                componentPrice: "70$"
            },
            {
                img: compImg1,
                componentName: "Divan",
                componentPrice: "50$"
            },
            {
                img: compImg2,
                componentName: "Mawin",
                componentPrice: "20$"
            },
            {
                img: compImg3,
                componentName: "Qulaqciq",
                componentPrice: "30$"
            },
            {
                img: compImg4,
                componentName: "Telefon",
                componentPrice: "70$"
            },
            {
                img: compImg1,
                componentName: "Divan",
                componentPrice: "50$"
            },
            {
                img: compImg2,
                componentName: "Mawin",
                componentPrice: "20$"
            },
            {
                img: compImg3,
                componentName: "Qulaqciq",
                componentPrice: "30$"
            },
            {
                img: compImg4,
                componentName: "Telefon",
                componentPrice: "70$"
            }
        ]
    }
    render() {
        let {components} = this.state;
        return (
            <div className="components-div">
                {
                    components.map((item) => {
                        return (
                            <div className="component">
                                <img src={item.img} alt="home" className="component-img" />
                                <span className="component-span">{item.componentName}</span>
                                <span className="price-span">{item.componentPrice} </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}