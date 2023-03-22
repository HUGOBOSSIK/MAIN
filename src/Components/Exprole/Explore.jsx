import Exp1 from '../../Explore/Exp1.png';
import Exp2 from '../../Explore/Exp2.png';
import Exp3 from '../../Explore/Exp3.png';
import Exp4 from '../../Explore/Exp4.png';
import Exp5 from '../../Explore/Exp5.png';
import Exp6 from '../../Explore/Exp6.png';
import Exp7 from '../../Explore/Exp7.png';
import Food from '../../img/Food.png';
import Home from '../../img/Home.png';
const Explore = () => {
    return (
        <section className="Explore">
            <div className="container">
                <div className="title_explore">
                <h2>Explore even more</h2>
                </div>
                <div className="gallery_box">
                    <div className="post_explore">
                        <a href="#">
                            <img src={Exp1} alt="exp1"/>
                        </a>
                        <h3>Women's Clothing</h3>

                    </div>
                    <div className="post_explore">
                        <a href="#">
                            <img src={Exp2} alt="exp2"/>
                        </a>
                        <h3>Bath</h3>
                    </div>
                    <div className="post_explore">
                        <a href="#">
                            <img src={Exp3} alt="exp3"/>
                        </a>
                        <h3>Kitchen</h3>
                    </div>
                    <div className="post_explore">
                        <a href="#">
                            <img src={Exp4} alt="exp4"/>
                        </a>
                        <h3>Bedding</h3>
                    </div>
                    <div className="post_explore">
                        <a href="#">
                            <img src={Exp5} alt="exp5"/>
                        </a>
                        <h3>Men's Clothing</h3>
                    </div>
                    <div className="post_explore">
                        <a href="#">
                            <img src={Exp6} alt="exp6"/>
                        </a>
                        <h3>Jewelry</h3>
                    </div>
                    <div className="post_explore">
                        <a href="#">
                            <img src={Exp7} alt="exp7"/>
                        </a>
                        <h3>Skincare</h3>
                    </div>
                </div>

                <div className="wrapper_box">
                    <div className="left_box">
                        <a href="#">
                            <img src={Food} alt="Food"/>
                        </a>
                        <h2>Cookware to Count On</h2>
                        <p>Upgrade your meal prep and stick to your resolutions with Italic cookware</p>
                    </div>
                    <div className="right_box">
                        <a href="#">
                            <img src={Home} alt="Home"/>
                        </a>
                        <h2>Indulgent Bedding</h2>
                        <p>From breathable flax linen to silky luxe sateen, cozy up to bedding essentials for everyone.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Explore;