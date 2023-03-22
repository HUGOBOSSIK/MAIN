import Product from '../../img/Product.png';
const Baner = () => {
    return (
        <section className="Baner">
            <div className="container">
                <div className="title_baner">
                    <h1>Luxury without labels</h1>
                </div>

            </div>
            <div className="product_img">
                <img src={Product} alt="Product"/>
            </div>
        </section>
    )
}
export default Baner;