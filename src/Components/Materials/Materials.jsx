import Mat1 from '../../img/mat1.png';
import Mat2 from '../../img/mat2.png';
import Mat3 from '../../img/mat3.png';
const Materials = () => {
    return (
        <section className="Materials">
            <div className="container">
                <h2>What we value most</h2>
                <div className="wrapper_materials">
                    <div className="mat_box">
                        <div className="box_text">
                        <h2>Atelier-Grade Materials</h2>
                        <p>Fine, rare materials for optimal performance and durability</p>
                        </div>
                        <div className="box_img">
                        <a href="#">
                        <img src={Mat1} alt="mat1"/>
                        </a>
                        </div>
                    </div>
                    <div className="mat_box">
                        <h2>Radical Value</h2>
                        <p>We believe luxury is defined by the quality of product, not by the price tag.</p>
                        <div className="box_img">
                        <a href="#">
                            <img src={Mat2} alt="mat2"/>
                        </a>
                        </div>
                    </div>
                    <div className="mat_box">
                        <h2>World-Class Craftsmanship</h2>
                        <p>The world's best manufacturers, the same as top luxury brands.</p>
                        <div className="box_img">
                        <a href="#">
                            <img src={Mat3} alt="mat3"/>
                        </a>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
export default Materials;