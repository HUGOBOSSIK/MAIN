window.onload = function() {

    const titleFootEls = document.querySelectorAll('.title_foot');

    titleFootEls.forEach(titleFootEl => {
        titleFootEl.addEventListener('click', () => {
            const subFootMenuEl = titleFootEl.nextElementSibling;
            subFootMenuEl.classList.toggle('show');

            const isOpen = subFootMenuEl.classList.contains('show');
            titleFootEl.setAttribute('aria-expanded', isOpen);
        });
    });
}

const Footer = () => {

    return (

        <footer className="Footer">
            <div className="container">
                <div className="wrapper_foot">
                    <div className="stay_in_touch">
                        <h2>Stay in touch</h2>
                        <p>Sign up to be the first to know about new collections and exclusive events.</p>
                        <form>
                            <input/>
                            <button>Submit</button>
                        </form>
                    </div>

                        <div className="company">
                            <div className="title_foot" >Company</div>
                            <ul className="sub_foot_menu">
                                <li>
                                    <a href="#" >Our Story</a>
                                </li>
                                <li>
                                    <a href="#">Corporate Gifts</a>
                                </li>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                                <li>
                                    <a href="#">Press</a>
                                </li>
                            </ul>
                        </div>

                        <div className="services">
                            <div className="title_foot">Services</div>
                            <ul className="sub_foot_menu">
                                <li>
                                    <a href="#">Membership</a>
                                </li>
                                <li>
                                    <a href="#">FAQs</a>
                                </li>
                                <li>
                                    <a href="#">Help Center</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Returns</a>
                                </li>
                                <li>
                                    <a href="#">Track Orders</a>
                                </li>
                                <li>
                                    <a href="#">Accessibility</a>
                                </li>
                            </ul>
                        </div>

                        <div className="guides">
                            <div className="title_foot">Guides</div>
                            <ul className="sub_foot_menu">
                                <li>
                                    <a href="#">The Cashmere Guide</a>
                                </li>
                                <li>
                                    <a href="#">Resort-Grade Bedding</a>
                                </li>
                                <li>
                                    <a href="#">Guide to Fine Jewelry</a>
                                </li>
                                <li>
                                    <a href="#">Beauty Guide</a>
                                </li>
                            </ul>
                        </div>
                </div>

            </div>
        </footer>
    )
}
export default Footer;