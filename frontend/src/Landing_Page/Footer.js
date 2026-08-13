import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {

    return (
        <footer className="footer">

            <div className="footer-container">


                {/* =====================
                    BRAND
                ===================== */}

                <div className="footer-brand">

                    <div className="footer-logo">

                        <div className="footer-logo-circle">
                            <i className="fa-solid fa-leaf"></i>
                        </div>

                        <div>
                            <h3>PURELANE</h3>

                            <span>
                                CLEAN, SIMPLY
                            </span>
                        </div>

                    </div>


                    <p>
                        Effective cleaning, powered by nature.
                        <br />
                        Made for Indian homes since day one.
                    </p>

                </div>


                {/* =====================
                    SHOP
                ===================== */}

                <div className="footer-column">

                    <h4>SHOP</h4>

                    <Link to="/shop">
                        Bestsellers
                    </Link>

                    <Link to="/shop">
                        Kitchen
                    </Link>

                    <Link to="/shop">
                        Laundry
                    </Link>

                    <Link to="/shop">
                        Home
                    </Link>

                    <Link to="/shop">
                        Skin
                    </Link>

                    <Link to="/bundles">
                        Starter kits
                    </Link>

                </div>


                {/* =====================
                    ABOUT
                ===================== */}

                <div className="footer-column">

                    <h4>ABOUT</h4>

                    <Link to="/how-it-works">
                        How it works
                    </Link>

                    <Link to="/sustainability">
                        Sustainability
                    </Link>

                    <Link to="/faqs">
                        FAQs
                    </Link>

                    <Link to="/reviews">
                        Reviews
                    </Link>

                </div>


                {/* =====================
                    CONTACT
                ===================== */}

                <div className="footer-column contact-column">

                    <h4>GET IN TOUCH</h4>

                    <a href="mailto:hello@purelane.com">
                        hello@purelane.com
                    </a>

                    <a href="tel:+919930123234">
                        +91 9930 123 234
                    </a>

                    <p>
                        Purelane Eco Products Pvt. Ltd.
                    </p>

                </div>

            </div>


            {/* =====================
                BOTTOM
            ===================== */}

            <div className="footer-bottom">

                <p>
                    © 2026 Purelane Eco Products Private Limited
                </p>

                <div className="footer-legal">

                    <Link to="/privacy">
                        Privacy
                    </Link>

                    <span>·</span>

                    <Link to="/terms">
                        Terms
                    </Link>

                    <span>·</span>

                    <Link to="/refunds">
                        Refunds
                    </Link>

                    <span>·</span>

                    <Link to="/contact">
                        Contact
                    </Link>

                </div>

            </div>

        </footer>
    );
}

export default Footer;