import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import Trend1 from '../../img/Trending/Trend1.png';
import Trend2 from '../../img/Trending/Trend2.png';
import Trend3 from '../../img/Trending/Trend3.png';
import Trend4 from '../../img/Trending/Trend4.png';
import Trend5 from '../../img/Trending/Trend5.png';



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
                        autoplay: true,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
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
                        infinite: true,
                        autoplay: true,
                        dots: true
                    }
                }
            ]
        };
        return (
            <section className="Trending">
                <div className="container">
                    <div className="trending_title">
                        <div className="trending_title">
                            <h2>Trending</h2>
                        </div>

                        <Slider {...settings}>
                            <div className="post1 trending_blog">
                                <a className="trending_img">
                                    <img src={Trend1} alt="trend1"/>
                                </a>
                                <div className="post_trending_1">
                                    <div className="btn_view_trending">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="trending_post">
                                        <h2>Rafa Backpack</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Away</a>

                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>

                                        <a href="#">Boss </a>
                                        <p>$85 3 Colors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="post1 trending_blog">
                                <a className=" trending_img">
                                    <img src={Trend2} alt="Trend2"/>
                                </a>

                                <div className="post_trending_1">
                                    <div className="btn_view_trending">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="trending_post">
                                        <h2>Cleo Oversized Cashmere Scarf</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Burberry</a>
                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                        <a href="#">Max Mara </a>
                                        <p>$130 3 Colors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="post1 trending_blog">
                                <a className=" trending_img">
                                    <img src={Trend3} alt="Trend3"/>
                                </a>

                                <div className="post_trending_1">
                                    <div className="btn_view_trending">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="trending_post">
                                        <h2>Aluminum Carry-On Suitcase</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Away</a>
                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                        <a href="#">Samsonite </a>
                                        <p>$500 2 Colors</p>
                                    </div>
                                </div>
                            </div>

                            <div className="post1 trending_blog">
                                <a className=" trending_img">
                                    <img src={Trend4} alt="Trend4"/>
                                </a>


                                <div className="post_trending_1">
                                    <div className="btn_view_trending">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="trending_post">
                                        <h2>Amara Cashmere Wrap</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Burberry</a>
                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                        <a href="#">Max Mara </a>
                                        <p>$315 2 Colors</p>
                                    </div>
                                </div>
                            </div>

                            <div className="post1 trending_blog">
                                <a className=" trending_img">
                                    <img src={Trend5} alt="Trend5"/>
                                </a>

                                <div className="post_trending_1">
                                    <div className="btn_view_trending">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="trending_post">
                                        <h2>Priscilla Silk Halter Mini Dress</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Stella McCartney</a>
                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                        <a href="#">Max Mara </a>
                                        <p>$500 2 Colors</p>
                                    </div>
                                </div>
                            </div>

                            <div className="post1 trending_blog">
                                <a className="trending_img">
                                    <img src={Trend1} alt="trend1"/>
                                </a>
                                <div className="post_trending_1">
                                    <div className="btn_view_trending">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="trending_post">
                                        <h2>Rafa Backpack</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Away</a>

                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>

                                        <a href="#">Boss </a>
                                        <p>$85 3 Colors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="post1 trending_blog">
                                <a className=" trending_img">
                                    <img src={Trend2} alt="Trend2"/>
                                </a>

                                <div className="post_trending_1">
                                    <div className="btn_view_trending">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="trending_post">
                                        <h2>Cleo Oversized Cashmere Scarf</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Burberry</a>
                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                        <a href="#">Max Mara </a>
                                        <p>$130 3 Colors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="post1 trending_blog">
                                <a className=" trending_img">
                                    <img src={Trend3} alt="Trend3"/>
                                </a>

                                <div className="post_trending_1">
                                    <div className="btn_view_trending">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="trending_post">
                                        <h2>Aluminum Carry-On Suitcase</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Away</a>
                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                        <a href="#">Samsonite </a>
                                        <p>$500 2 Colors</p>
                                    </div>
                                </div>
                            </div>

                            <div className="post1 trending_blog">
                                <a className=" trending_img">
                                    <img src={Trend4} alt="Trend4"/>
                                </a>


                                <div className="post_trending_1">
                                    <div className="btn_view_trending">
                                        <a>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Quick view
                                        </a>
                                    </div>
                                    <div className="trending_post">
                                        <h2>Amara Cashmere Wrap</h2>
                                        <p>Same manufacturer as</p>
                                        <a href="#">Burberry</a>
                                        <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                        <a href="#">Max Mara </a>
                                        <p>$315 2 Colors</p>
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