import React from "react";
import Card from "./Card";
import products from "../../data/products";
import "./Shop.css";

function Shop() {

    const getRandomProducts = (productsArray, count = 6) => {
        const shuffled = [...productsArray].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    };

    const displayedProducts = getRandomProducts(products, 6);

    return (
        <section className="shop-section" id="shop">

            <div className="shop-heading">

                <p className="shop-small-heading">
                    BESTSELLERS
                </p>

                <h2>
                    LOVED BY 30,000 HOMES
                </h2>

                <div className="shop-divider">

                    <span></span>

                    <img src={process.env.PUBLIC_URL + "/Media/Images/leaf.png"} alt="" />

                    <span></span>

                </div>

            </div>


            <div className="products-grid">

                {displayedProducts.map((product) => (
                    <Card
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>

        </section>
    );
}

export default Shop;