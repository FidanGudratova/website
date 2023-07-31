import React, { Component } from 'react';
import "./Product.css";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ComponentsDiv from "../ComponentsDiv/ComponentsDiv";
import Pros from "../Pros/Pros";
import contactImg from "../Assets/Imgs/contact-img.svg";
import compImg12 from "../Assets/Imgs/product.jpg";
import contact from "../Assets/Icons/phone-call 1.svg";




export default class Product extends Component {
    render() {
        return (
            <div className="main">

                <Header />

                <section>
                    <div className="searchbar">
                        <input className="input-search" type='text' placeholder='Search is here'></input>
                        <button className="search-button">SEARCH</button>
                    </div>
                    <div className='product'>

                        <p className="product-name-tel"> Samsung Galaxy A52 Awesome Blue 128GB</p>
                        <div className="product-header-div"> 
                            <div className="product-contact"> 
                                <img className="product-contact-img" src={contactImg} alt="contact" />
                                <div className="product-contact-info">
                                    <span>Az Telecom</span>
                                    <span>Today, 16:19</span>
                                </div>
                            </div>
                            <div className="product-contacts"> 
                                <img className="product-contact-icon" src={contact} alt="" />
                                <div className="product-contact-info">
                                    <span>Phone</span>
                                    <span>070 258 94 94</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-body-div">
                            <img className="product-img" src={compImg12} alt="" />
                            <div className="product-info-card">
                                <span className="product-price"> 450$ </span>
                                <div className="product-details">
                                    <div className="product-details-part">
                                        <span className="query">City</span>
                                        <span className="ans">Baku</span>
                                    </div>
                                    <div className="product-details-part">
                                        <span className="query">Brend</span>
                                        <span className="ans">Samsung</span>
                                    </div>
                                    <div className="product-details-part">
                                        <span className="query">Color</span>
                                        <span className="ans">Awesome Blue</span>
                                    </div>
                                    <div className="product-details-part">
                                        <span className="query">Memory</span>
                                        <span className="ans">128GB</span>
                                    </div>
                                    <div className="product-details-part">
                                        <span className="query">Delivery</span>
                                        <span className="ans">Free Shipping</span>
                                    </div>


                                </div>
                                <span className="ads-number"> Number: 2548941 </span>
                            </div>

                        </div>
                        {/* <div className="product-add-info">
                            <p> 
                                Bir il zəmanət, qeydiyyatlı və yeni(bağlı qutuda), sellofan ilk sizin gözünüzün önündə açılsın😉
                                Orijinal və global versiya.
                            </p>                            
                            <br />
                            <p>
                                İlk 14 gündə məhsulda, istehsalçı defekti yaranarsa, əgər proqram təminatıdırsa yazılıb sizə geri, təhvil verilir, yox əgər təmirlik bir problem olarsa, məhsul yenisi ilə əvəz olunur.
                            </p>
                            < br />
                            <p>
                                ⚙️ Android : Android 11, One UI 3.1
                                🔋 Batareya : 4500mAh , Fast charging 25W , Type - C .
                                📱 Ekran tipi: Super AMOLED, 90Hz, 800 nits
                                Ekran ölçüsü: 6.5 inches, 101.0 cm2 (~84.1% screen-to-body ratio)
                                Ekran imkanları: 1080 x 2400 pixels, 20:9 ratio (~407 ppi density)
                                Corning Gorilla Glass 5
                                📷 Ön kamera : 32 MP, f/2.2, 26mm (wide), 1/2.8", 0.8µm
                                Features : HDR
                                🎥 Video: 4K@30fps, 1080p@30fps
                                📸 Arxa kamera :.
                                64 MP, f/1.8, 26mm (wide), 1/1.7X", 0.8µm, PDAF, OIS
                                12 MP, f/2.2, 123˚ (ultrawide), 1.12µm
                                5 MP, f/2.4, (macro)
                                5 MP, f/2.4, (depth)
                                Features: LED flash, panorama, HDR
                                🎥 Video : 4K@30fps, 1080p@30/60fps; gyro-EIS
                                🔧 Prosessor: Qualcomm SM7125 Snapdragon 720G (8 nm)
                                CPU: Octa-core (2x2.3 GHz Kryo 465 Gold & 6x1.8 GHz Kryo 465 Silver)
                                GPU: Adreno 618
                                📏 Ölçüləri : 159.9 x 75.1 x 8.4 mm (6.30 x 2.96 x 0.33 in)
                                ⚖ ️Çəkisi : 189 g (6.67 oz)
                                GPS VAR
                                📻 FM Radio var.
                                Bluetooth : 5.0, A2DP, LE
                                🔓 Barmaq izi Ekranda
                                Buraxılış tarixi : 2021, March 17
                            </p>    
                            <br />
                            <p>    
                                Kredit yoxdur, birkart Tam kart Albali kart bolkart keçərli deyil ❌ (yalnız nəğd satış)
                            </p>
                            <br />
                            <p>
                                📍Mağazanın ünvanı:28 May, Bank of Baku ilə üzbeüz .
                                Əlavə məlumat üçün WhatsAppa yaza .bilərsiniz.
                            </p>
                            

                        </div> */}
                        

                    </div>

                    <ComponentsDiv />

                    <Pros />
                </section>


                <Footer />
            </div>
        )
    }

}
