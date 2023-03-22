import Lad1 from '../../img/Lady/Lad1.png'
import Lad2 from '../../img/Lady/Lad2.png'
import Lad3 from '../../img/Lady/Lad3.png'
import Lad4 from '../../img/Lady/Lad4.png'
import Lad5 from '../../img/Lady/Lad5.png'
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
const Hit_refresh = () => {
    return (
        <section className="Hit_refresh">
            <div className="container">
                <div className="hit_box">
                    <h2>HIIT Refresh</h2>
                    <div className="parent_box">
                    <div className="child_hit">
                        <h3>Take your workouts to the next level with supremely soft activewear that's made to move with you.</h3>
                    </div>
                    <div className="child_hit">
                        <button>Discover More</button>
                    </div>
                    </div>
                </div>
                <div className="content_block">
                    <div className="big_section">
                        <a>
                        <img src={Lad1} alt="lad1"/>
                        </a>
                    </div>
                    <div className="little_section">
                        <div className="collection">

                            <a href="#" className="collection_img">
                                <img src={Lad2} alt="lad2"/>
                            </a>
                            <div className="collection_text">
                                <a className="btn_view_little">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Quick view
                                </a>
                                <h2>Aura Contour Jacket</h2>
                                <p>Same manufacturer as</p>
                                <a href="#">Vilebrequin</a>
                                <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                <a href="#">Stella McCartney</a>
                                <p>$58 2 Colors</p>
                            </div>
                        </div>

                        <div className="collection">
                            <a href="#" className="collection_img">
                                <img src={Lad3} alt="lad3"/>
                            </a>
                            <div className="collection_text">

                                <a className="btn_view_little">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Quick view
                                </a>
                                <h2>Aura Contour Jacket</h2>
                                <p>Same manufacturer as</p>
                                <a href="#">Vilebrequin</a>
                                <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                <a href="#">Stella McCartney</a>
                                <p>$58 2 Colors</p>
                            </div>
                        </div>

                        <div className="collection">
                            <a href="#" className="collection_img">
                                <img src={Lad4} alt="lad4"/>
                            </a>
                            <div className="collection_text">
                                <a className="btn_view_little">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Quick view
                                </a>
                                <h2>Aura Contour Jacket</h2>
                                <p>Same manufacturer as</p>
                                <a href="#">Vilebrequin</a>
                                <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                <a href="#">Stella McCartney</a>
                                <p>$58 2 Colors</p>
                            </div>
                        </div>

                        <div className="collection">
                            <a href="#" className="collection_img">
                                <img src={Lad5} alt="lad5"/>
                            </a>
                            <div className="text">
                                <h2>Trending</h2>
                            </div>
                            <div className="collection_text">
                                <a className="btn_view_little">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 10V13.5H10M13.1813 13.18L9.5 9.5M2.5 6V2.5H6M2.81867 2.82L6.5 6.5M10 2.5H13.5V6M13.18 2.81867L9.5 6.5M6 13.5H2.5V10M2.82 13.1813L6.5 9.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Quick view
                                </a>
                                <h2>Aura Contour Jacket</h2>
                                <p>Same manufacturer as</p>
                                <a href="#">Vilebrequin</a>
                                <FontAwesomeIcon icon={faCircle} className="icon_font"/>
                                <a href="#">Stella McCartney</a>
                                <p>$58 2 Colors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hit_refresh;