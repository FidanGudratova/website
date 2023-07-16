import React, { Component } from 'react';
import "./Main.css";

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <header>
                    <div className="logo"> logo var ama yoxdu sad..
                        {/* <div className="logo-span"><img src={logo} alt=""> </img></div> */}
                    </div>
                    <div className="navbar">
                        <span className="navbar-span">Home </span>
                        <span className="navbar-span">About </span>
                        <span className="navbar-span">Contacts </span>
                        <span className="navbar-span">Log In </span>
                        <span><input className="input-search" type='text' placeholder='Search is here'></input></span>
                        <span><button>SEARCH</button></span>
                    </div>
                </header>
                <section>
                    <div className="categories-div">
                        <div className="category"> 
                            <div className="category-img"> </div>
                            <span className="category-span">Electronics</span> 
                        </div>

                    </div>

                    <div className="components-div">
                        <div className="component">
                            {/* <img src="../imgs/img1.png" alt="" ></img> */}
                            <span className="component-span">componentname</span> 
                        </div>
                        <div className="component">
                            {/* <img src="../imgs/img1.png" alt="" ></img> */}
                            <span className="component-span">componentname</span> 
                        </div>
                        <div className="component">
                            {/* <img src="../imgs/img1.png" alt="" ></img> */}
                            <span className="component-span">componentname</span> 
                        </div>
                        <div className="component">
                            {/* <img src="../imgs/img1.png" alt="" ></img> */}
                            <span className="component-span">componentname</span> 
                        </div>
                        
                    </div>
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
                <footer>
                    <div className="details">
                        <div className='subscribe'>
                            <p className="subs-header">Subscribe to us..</p>
                            <span><input className="mail-input" type="email" placeholder='Email' required ></input></span>
                            <span><button>SUBMIT</button></span>
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
            </div>
        )
    }

}
