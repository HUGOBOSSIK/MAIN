import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import React, { Component } from "react";
import Slider from "react-slick";
import MediaQuery from 'react-responsive';
import Jew1 from '../../img/jewl1.jpg';
import Jew2 from '../../img/jewl2.jpg';
import Jew3 from '../../img/jewl3.jpg';
export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 1000,
            slidesToShow: 3,
            arrows: false,
            slidesToScroll: 1,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2,
                        infinite: true,
                        autoplay: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        autoplay: true,
                        dots: true
                    }
                }
            ]
        };
        return (

                    <section className="Jewerly">
                <div className="container">
                    <div className="jewelry_box">
                        <div className="title_jewelry">
                            <h2>New arrivals</h2>
                            <p>Explore new-in products and future bestsellers.</p>
                            <button>Shop New Arrivals</button>
                        </div>
                        <MediaQuery maxWidth={1199}>
                            {(matches) => {
                                const slidesToShow = matches ? 1 : 3;
                                return (
                    <Slider {...settings} slidesToShow={slidesToShow}>
                        <div className="post1">
                            <a className="img_post">
                            <img src={Jew1} alt="jew1"/>
                            </a>
                            <div className="post_jew_1">
                                <a className="btn_view">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Quick view
                                </a>
                                <div className="wrapper_post">
                                <h2>14k Solid Gold Diamond Drop Chain Earrings</h2>
                                <p>Same manufacturer as</p>
                                <a href="#">Van Cleef</a>

                                <FontAwesomeIcon icon={faCircle} className="icon_font"/>

                                <a href="#">BVLGARI </a>
                                <p>$315 2 Colors</p>
                                </div>
                            </div>
                        </div>
                        <div className="post1">
                            <a className="img_post">
                                <img src={Jew2} alt="jew2"/>
                            </a>

                            <div className="post_jew_1">
                                <a className="btn_view">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Quick view
                                </a>
                                <div className="wrapper_post">
                                <h2>14k Solid Gold Diamond Drop Chain Earrings</h2>
                                <p>Same manufacturer as</p>
                                <a href="#">Van Cleef</a>
                                <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                <a href="#">BVLGARI </a>
                                <p>$350 2 Colors</p>
                                </div>
                            </div>
                        </div>
                        <div className="post1">
                            <a className="img_post">
                                <img src={Jew3} alt="jew3"/>
                            </a>

                            <div className="post_jew_1">
                                <a className="btn_view">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Quick view
                                </a>
                                <div className="wrapper_post">
                                <h2>14k Solid Gold Diamond Drop Chain Earrings</h2>
                                <p>Same manufacturer as</p>
                                <a href="#">Van Cleef</a>
                                <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                <a href="#">BVLGARI </a>
                                <p>$500 2 Colors</p>
                                </div>
                            </div>
                        </div>

                        <div className="post1">
                            <a className="img_post">
                                <img src={Jew1} alt="jew1"/>
                            </a>


                            <div className="post_jew_1">
                                <a className="btn_view">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Quick view
                                </a>
                                <div className="wrapper_post">
                                <h2>14k Solid Gold Diamond Drop Chain Earrings</h2>
                                <p>Same manufacturer as</p>
                                <a href="#">Van Cleef</a>
                                <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                <a href="#">BVLGARI </a>
                                <p>$315 2 Colors</p>
                                </div>
                            </div>
                        </div>
                        <div className="post1">
                            <a className="img_post">
                                <img src={Jew2} alt="jew2"/>
                            </a>

                            <div className="post_jew_1">
                                <a className="btn_view">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Quick view
                                </a>
                                <div className="wrapper_post">
                                <h2>14k Solid Gold Diamond Drop Chain Earrings</h2>
                                <p>Same manufacturer as</p>
                                <a href="#">Van Cleef</a>
                                <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                <a href="#">BVLGARI </a>
                                <p>$350 2 Colors</p>
                                </div>
                            </div>
                        </div>
                        <div className="post1">
                            <a className="img_post">
                                <img src={Jew3} alt="jew3"/>
                            </a>

                            <div className="post_jew_1">
                                <a className="btn_view">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Quick view
                                </a>
                                <div className="wrapper_post">
                                <h2>14k Solid Gold Diamond Drop Chain Earrings</h2>
                                <p>Same manufacturer as</p>
                                <a href="#">Van Cleef</a>
                                <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                <a href="#">BVLGARI </a>
                                <p>$500 2 Colors</p>
                                </div>
                            </div>
                        </div>


                    </Slider>
                            );
                            }}
                        </MediaQuery>
                    </div>
                </div>
            </section>
        );
    }
}
/*
            <section className="Jewelry">
                <div className="container">
                    <div className="jewelry_box">
                        <div className="title_jewelry">
                            <h2>New arrivals</h2>
                            <p>Explore new-in products and future bestsellers.</p>
                            <button>Shop New Arrivals</button>
                        </div>
                       */