import React from "react";
import Qual1 from '../../img/Qual1.jpg';

const Quality = () => {
    return (
        <section className="Quality">
            <div className="container">
                <div className="text_qual">
                <h2>Our commitment to quality</h2>
                <p>It all starts with our goal of making luxury-level products accessible to all. Whether it’s sourcing Grade A cashmere from Mongolia or devoting hundreds of hours of wear-testing to develop the perfect leather sneakers — we won’t sell it until we love it.</p>
                </div>

                <div className="qual_img">
                    <img src={Qual1} alt="Qual1"/>
                </div>
                <div className="qual_wrapper">
                    <div className="qual_block">
                        <h2>Atelier Quality</h2>
                        <p>Responsibly produced by the same manufacturers as top luxury brands to ensure world-class construction</p>
                    </div>
                    <div className="qual_block">
                        <h2>Exceptional Materials</h2>
                        <p>Sourcing the world’s finest materials with an uncompromising focus on gradation, performance, and durability</p>
                    </div>
                    <div className="qual_block">
                        <h2>Timeless Design</h2>
                        <p>Recreating everyday essentials with subtle, considered details. Designed to improve the modern, elevated lifestyle</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Quality;