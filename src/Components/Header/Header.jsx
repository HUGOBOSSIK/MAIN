
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars,faTimes, faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Logo from '../../img/Logo.svg';
import { useState } from 'react';
import React from "react";
import Modal from "../Modal/Modal";




const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [menuActive, setMenuActive] = useState(false);

    const handleMenuClick = () => {
        setMenuActive(!menuActive);
    };

    const handleCloseClick = () => {
        setMenuActive(false);
    };

    return (

    <header className="Header">
        <div className="container">
            <div className="header_box">
                <div className="logo_box">
                    <a href="/">
                        <img src={Logo} alt="Logo"/>
                    </a>
                </div>
                <div className="nav_box">
                    <nav className="menu">
                        <ul className="sub_menu">
                            <li className="item_menu">
                                <a href="#">Featured</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Women</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Men</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Home</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Jewelry</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Beauty</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Travel</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Pets</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="responsive_menu" onClick={handleMenuClick}>
                    <FontAwesomeIcon icon={menuActive ? faTimes : faBars} />
                </div>
                <div className={`menu_items ${menuActive ? 'active' : ''}`}>
                    <div className="menu_close" onClick={handleCloseClick}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>

                    <ul>
                        <li>
                            <a href="#">Featured</a>
                        </li>
                        <li>
                            <a href="#">Women</a>
                        </li>
                        <li>
                            <a href="#">Men</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Jewelry</a>
                        </li>
                        <li>
                            <a href="#">Beauty</a>
                        </li>
                        <li>
                            <a href="#">Travel</a>
                        </li>
                        <li>
                            <a href="#">Pets</a>
                        </li>

                    </ul>
                </div>
                <div className="menu-overlay"></div>
                <div className="modal_box">

                    <button className="sign_in" onClick={openModal}>
                        Sign in
                    </button>
                    <Modal isOpen={isModalOpen} onClose={closeModal}/>
                    <button className="Search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <button className="store">
                        <FontAwesomeIcon icon={faShoppingBag}/>
                    </button>

                </div>
            </div>
        </div>
    </header>
    )

}


export default Header;