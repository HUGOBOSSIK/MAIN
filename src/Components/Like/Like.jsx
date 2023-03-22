import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import Like1 from '../../img/Like/Like1.jpg';
import Like2 from '../../img/Like/Like2.jpg';
import Like3 from '../../img/Like/Like3.jpg';
import Like4 from '../../img/Like/Like4.jpg';
import Like5 from '../../img/Like/Like5.jpg';




export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 1000,
            slidesToShow: 5,
            arrows: false,
            slidesToScroll: 1,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                        autoplay: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2,
                        infinite: false,
                        autoplay: true
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
            <section className="Like">
                <div className="container">
                    <div className="like_title">
                        <div className="title_text">
                            <h2>You might like</h2>
                        </div>

                        <Slider {...settings}>
                            <div className="box1">
                                <a className="like_img">
                                    <img src={Like1} alt="Like1"/>
                                </a>
                                <div className="post_like">
                                    <div className="btn_view_like">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5"
                                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="like_post_1">
                                        <h2>Rafa Backpack</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Away</a>

                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>

                                        <a href="#">Boss </a>
                                        <p>$85 3 Colors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box1">
                                <a className="like_img">
                                    <img src={Like2} alt="Like2"/>
                                </a>
                                <div className="post_like">
                                    <div className="btn_view_like">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5"
                                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="like_post_1">
                                        <h2>Rafa Backpack</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Away</a>

                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>

                                        <a href="#">Boss </a>
                                        <p>$85 3 Colors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box1">
                                <a className="like_img">
                                    <img src={Like3} alt="Like3"/>
                                </a>
                                <div className="post_like">
                                    <div className="btn_view_like">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5"
                                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="like_post_1">
                                        <h2>Rafa Backpack</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Away</a>

                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>

                                        <a href="#">Boss </a>
                                        <p>$85 3 Colors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box1">
                                <a className="like_img">
                                    <img src={Like4} alt="Like4"/>
                                </a>
                                <div className="post_like">
                                    <div className="btn_view_like">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5"
                                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="like_post_1">
                                        <h2>Rafa Backpack</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Away</a>

                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>

                                        <a href="#">Boss </a>
                                        <p>$85 3 Colors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box1">
                                <a className="like_img">
                                    <img src={Like5} alt="Like5"/>
                                </a>
                                <div className="post_like">
                                    <div className="btn_view_like">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5"
                                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="like_post_1">
                                        <h2>Rafa Backpack</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Away</a>

                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>

                                        <a href="#">Boss </a>
                                        <p>$85 3 Colors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box1">
                                <a className="like_img">
                                    <img src={Like1} alt="Like1"/>
                                </a>
                                <div className="post_like">
                                    <div className="btn_view_like">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5"
                                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="like_post_1">
                                        <h2>Rafa Backpack</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Away</a>

                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>

                                        <a href="#">Boss </a>
                                        <p>$85 3 Colors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box1">
                                <a className="like_img">
                                    <img src={Like2} alt="Like2"/>
                                </a>
                                <div className="post_like">
                                    <div className="btn_view_like">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5"
                                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="like_post_1">
                                        <h2>Rafa Backpack</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Away</a>

                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>

                                        <a href="#">Boss </a>
                                        <p>$85 3 Colors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box1">
                                <a className="like_img">
                                    <img src={Like3} alt="Like3"/>
                                </a>
                                <div className="post_like">
                                    <div className="btn_view_like">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5"
                                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="like_post_1">
                                        <h2>Rafa Backpack</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Away</a>

                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>

                                        <a href="#">Boss </a>
                                        <p>$85 3 Colors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box1">
                                <a className="like_img">
                                    <img src={Like4} alt="Like4"/>
                                </a>
                                <div className="post_like">
                                    <div className="btn_view_like">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5"
                                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="like_post_1">
                                        <h2>Rafa Backpack</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Away</a>

                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>

                                        <a href="#">Boss </a>
                                        <p>$85 3 Colors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box1">
                                <a className="like_img">
                                    <img src={Like5} alt="Like5"/>
                                </a>
                                <div className="post_like">
                                    <div className="btn_view_like">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5"
                                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="like_post_1">
                                        <h2>Rafa Backpack</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Away</a>

                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>

                                        <a href="#">Boss </a>
                                        <p>$85 3 Colors</p>
                                    </div>
                                </div>
                            </div>



                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}