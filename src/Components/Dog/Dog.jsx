import Dog1 from '../../img/dog.jpg';
import Cosm1 from "../../img/cosm.jpg";

const Dog = () => {
    return (
        <section className="Dog">
            <div className="container">
                <div className="wrapper_mat_second">
                    <div className="mat_box_sec">
                        <img src={Dog1} alt="dog"/>
                        <h2>The Pet Edit</h2>
                        <p>Your best friend deserves the best. Pamper them with Italic’s pet essentials.</p>
                    </div>
                    <div className="mat_box_sec">
                        <img src={Cosm1} alt="cosmetic"/>
                        <h2>A Winning Combination</h2>
                        <p>Shop our most popular pairings and enjoy the savings offered through these curated bundles.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Dog;