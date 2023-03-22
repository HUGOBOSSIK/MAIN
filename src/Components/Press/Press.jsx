import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Pic1 from '../../img/Pic1.png';
import Pic2 from '../../img/Pic2.png';
import Pic3 from '../../img/Pic3.png';
import Pic4 from '../../img/Pic4.png';
import Pic5 from '../../img/Pic5.png';
import Pic6 from '../../img/Pic6.png';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 250,
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1
        };
        return (
            <section className="Press">
                <div className="container">
                    <div className="carousel_press">
                    <Slider {...settings}>
                        <div className="press_block">
                            <h3>Impressing the press.</h3>
                            <h2>“Luxury goods from Prada and Gucci are marked up because of their branding. This startup will sell them to you without the labels.”</h2>
                            <img src={Pic1} alt="Pic1"/>
                        </div>
                        <div className="press_block">
                            <h3>Impressing the press.</h3>
                            <h2>“A radical business selling quality goods without the middleman markup.”</h2>
                            <img src={Pic2} alt="Pic2"/>
                        </div>
                        <div className="press_block">
                            <h3>Impressing the press.</h3>
                            <h2>“Quality is superior to what you can find on other online retailers.”</h2>
                            <img src={Pic3} alt="Pic3"/>
                        </div>
                        <div className="press_block">
                            <h3>Impressing the press.</h3>
                            <h2>“Luxury goods from Prada and Gucci are marked up because of their branding. This startup will sell them to you without the labels.”</h2>
                            <img src={Pic4} alt="Pic4"/>
                        </div>
                        <div className="press_block">
                            <h3>Impressing the press.</h3>
                            <h2>“A radical business selling quality goods without the middleman markup.”</h2>
                            <img src={Pic5} alt="Pic5"/>
                        </div>
                        <div className="press_block">
                            <h3>Impressing the press.</h3>
                            <h2>“Quality is superior to what you can find on other online retailers.”</h2>
                            <img src={Pic6} alt="Pic6"/>
                        </div>

                    </Slider>
                    </div>
                </div>
            </section>
        );
    }
}