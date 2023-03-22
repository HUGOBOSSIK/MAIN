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
            speed: 1000,
            slidesToShow: 4,
            arrows: false,
            slidesToScroll: 4,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                        autoplay: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        infinite: true,
                        autoplay: true
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        infinite: true,
                        autoplay: true,
                    }
                }
            ]
        };

        return (
            <section className="Content_Carousel">
                <div className="container">
                <Slider {...settings}>
                    <div>
                        <img src={Pic1} alt="Pic1"/>
                    </div>
                    <div>
                        <img src={Pic2} alt="Pic2"/>
                    </div>
                    <div>
                        <img src={Pic3} alt="Pic3"/>
                    </div>
                    <div>
                        <img src={Pic4} alt="Pic4"/>
                    </div>
                    <div>
                        <img src={Pic5} alt="Pic5"/>
                    </div>
                    <div>
                        <img src={Pic6} alt="Pic6"/>
                    </div>
                </Slider>
                </div>
            </section>
        );
    }
}