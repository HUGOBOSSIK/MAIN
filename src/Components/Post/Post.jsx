import Woman from '../../img/woman.png';
import Towel from '../../img/towel.png';
const Post = () => {
    return (
        <section className="Post">
            <div className="container">
                <div className="post_box">
                    <div className="blog_1">
                        <img src={Woman} alt="Woman" title="Woman"/>
                        <h2>Skincare Saviors</h2>
                        <p>Upgrade your routine with prestige formulas for every skin type.</p>
                    </div>
                    <div className="blog_2">
                        <img src={Towel} alt="Towel" title="Towel"/>
                        <h2>Make Yourself at Home</h2>
                        <p>Transform your space with plush bath towels and cozy robes to rival any resort.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Post;