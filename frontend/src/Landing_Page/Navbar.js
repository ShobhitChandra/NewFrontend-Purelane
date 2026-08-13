import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar-custom">

            {/* LEFT - LOGO */}
            <Link to="/" className="navbar-logo">

                <div className="logo-icon">
                    <i className="fa-solid fa-cube"></i>
                </div>

                <div className="logo-text">
                    <span>PURELANE</span>
                    <small>CLEAN, SIMPLY</small>
                </div>

            </Link>


            {/* CENTER - LINKS */}
            <div className="navbar-links">

                <a href="#home">Home</a>

                <Link to="/ingredients">
                    Ingredients
                </Link>

                <Link to="/how-it-works">
                    How it works
                </Link>

                <Link to="/shop">
                    Shop
                </Link>

                <Link to="/bundles">
                    Bundles
                </Link>

            </div>


            {/* RIGHT - ICONS */}
            <div className="navbar-icons">

                <button aria-label="Search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>

                <Link to="/account" aria-label="Account">
                    <i className="fa-regular fa-user"></i>
                </Link>

                <Link
                    to="/cart"
                    className="cart-icon"
                    aria-label="Cart"
                >
                    <i className="fa-solid fa-cart-shopping"></i>

                    <span className="cart-count">
                        0
                    </span>
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;