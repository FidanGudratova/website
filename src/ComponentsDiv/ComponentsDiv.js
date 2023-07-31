import React, { Component } from 'react';
import "./ComponentsDiv.css";
import compImg1 from "../Assets/Imgs/1.png";
import compImg2 from "../Assets/Imgs/2.png";
import compImg3 from "../Assets/Imgs/3.png";
import compImg4 from "../Assets/Imgs/4.png";
import compImg5 from "../Assets/Imgs/5.png";
import compImg6 from "../Assets/Imgs/6.png";
import compImg7 from "../Assets/Imgs/7.png";
import compImg8 from "../Assets/Imgs/8.png";
import compImg12 from "../Assets/Imgs/9.png";
import { Link } from 'react-router-dom';


export default class ComponentsDiv extends Component {
    state = {
        components: [
            {
                img: compImg4,
                componentName: "Airphone",
                date: "USA, 26.06.2023",
                componentPrice: "30$"
            },
            {
                img: compImg1,
                componentName: "Sofa",
                date: "USA, today 11:20",
                componentPrice: "200 $"
            },
            {
                img: compImg5,
                componentName: "Toy",
                date: "USA, 23.06.2023",
                componentPrice: "5$"
            },
            {
                img: compImg2,
                componentName: "Computer",
                date: "USA, 23.05.2023",
                componentPrice: "500$"
            },
            {
                img: compImg3,
                componentName: "Lexus",
                date: "USA, today 09:40",
                componentPrice: "20 000$"
            },
            {
                img: compImg7,
                componentName: "Carafe",
                date: "USA, 03.07.2023",
                componentPrice: "10$"
            },
            {
                img: compImg4,
                componentName: "Airphone",
                date: "USA, 26.06.2023",
                componentPrice: "30$"
            },
            {
                img: compImg8,
                componentName: "Moped",
                date: "USA, today 11:20",
                componentPrice: "250$"
            },
            {
                img: compImg6,
                componentName: "Airphone",
                date: "USA, today 15:27",
                componentPrice: "20$"
            },
            {
                img: compImg12,
                componentName: "Bookcase",
                date: "USA, 30.03.2023",
                componentPrice: "50$"
            },
            {
                img: compImg1,
                componentName: "Sofa",
                date: "USA, today 11:20",
                componentPrice: "200 $"
            }, 
            {
                img: compImg2,
                componentName: "Computer",
                date: "USA, 23.05.2023",
                componentPrice: "500$"
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
                            <Link className="complink" to={'/product'} style={{ textDecoration: 'none' }}>
                                <div className="component">
                                    <img src={item.img} alt="home" className="component-img" />
                                    <div className="component-spans">
                                        <span className="price-span">{item.componentPrice} </span>
                                        <span className="component-span"> <b> {item.componentName} </b></span>
                                        <span className="component-span">{item.date}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}