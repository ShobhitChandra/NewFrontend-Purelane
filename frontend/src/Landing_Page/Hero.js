import React, { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {

    const products = [
        {
            image: "/media/images/2bot.png",
            title: "ANY 2 PRODUCTS",
            price: "₹349",
            oldPrice: "₹598",
            save: "SAVE ₹249"
        },
        {
            image: "/media/images/3bot.png",
            title: "ANY 3 PRODUCTS",
            price: "₹499",
            oldPrice: "₹750",
            save: "SAVE ₹251"
        },
        {
            image: "/media/images/1bot.png",
            title: "STARTER PACK",
            price: "₹299",
            oldPrice: "₹399",
            save: "SAVE ₹100"
        }
    ];

    const [currentProduct, setCurrentProduct] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentProduct(
                (prev) => (prev + 1) % products.length
            );
        }, 4000);

        return () => clearInterval(interval);

    }, [products.length]);


    const product = products[currentProduct];


    return (
        <section id="home" className="hero">

            <div className="container hero-container">

                <div className="row align-items-center">

                    {/* LEFT SIDE */}

                    <div className="col-lg-6 col-sm-12 hero-left">

                        <h1 className="hero-title">
                            CLEAN
                            <br />
                            THAT
                            <br />
                            <span>LASTS</span>
                        </h1>

                        <div className="hero-line">
                            <span>♧</span>
                        </div>

                        <p className="hero-description">
                            Homecare that works on the toughest grime, made from
                            plants. Kind to your home, your family and the world
                            outside it.
                        </p>

                        <div className="hero-buttons">

                            <button className="shop-btn">
                                SHOP NOW
                                <span>→</span>
                            </button>

                            <button className="works-btn">
                                HOW IT WORKS
                            </button>

                        </div>

                    </div>


                    {/* RIGHT SIDE */}

                    <div className="col-lg-6 col-sm-12 hero-right">

                        <div className="product-showcase">

                            {/* IMAGE */}

                            <div className="hero-image-container">

                                <img
                                    key={currentProduct}
                                    src={product.image}
                                    className="hero-image"
                                    alt="Purelane product"
                                />

                            </div>


                            {/* DOTS */}

                            <div className="carousel-dots">

                                {products.map((_, index) => (

                                    <button
                                        key={index}
                                        className={`carousel-dot ${
                                            currentProduct === index
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setCurrentProduct(index)
                                        }
                                        aria-label={`Product ${index + 1}`}
                                    />

                                ))}

                            </div>

                        </div>


                        {/* CHANGING PRICE CARD */}

                        <div
                            key={`card-${currentProduct}`}
                            className="price-card"
                        >

                            <small>
                                {product.title}
                            </small>

                            <div>
                                <strong>
                                    {product.price}
                                </strong>

                                <del>
                                    {product.oldPrice}
                                </del>
                            </div>

                            <span>
                                {product.save}
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;