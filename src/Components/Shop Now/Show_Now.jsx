import Woman2 from '../../img/Woman2.png';
const Show_Now = () => {
    return (
        <section className="Show_now">
            <div className="container">
                <div className="wrapper_show">
                    <div className="show_now_text">
                        <h3>Atelier Series</h3>
                        <h2>The capstone of luxury, with each piece representing the pinnacle of fine materials, master craftsmanship, and timeless design.</h2>
                       <button>Shop Now</button>

                    </div>
                    <div className="show_now_lady">
                        <a href="#">
                            <img src={Woman2} alt="lady"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Show_Now;