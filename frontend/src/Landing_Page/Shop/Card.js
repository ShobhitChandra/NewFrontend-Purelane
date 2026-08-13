import React from "react";
import "./Shop.css";

function Card({ product }) {
    return (
        <div className="product-card">

            {/* Badge */}
            <div className="product-image-box">

                <span className="product-badge">
                    {product.badge}
                </span>

                {/* Product Image */}
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                    />
                ) : (
                    <div className="no-product-image">
                        {product.fallbackImage ? (
                            <img
                                src={product.fallbackImage}
                                alt=""
                                className="fallback-image"
                            />
                        ) : (
                            <i className="fa-solid fa-leaf"></i>
                        )}
                    </div>
                )}

                {/* Sold Out overlay */}
                {!product.available && (
                    <div className="sold-out">
                        SOLD OUT
                    </div>
                )}

            </div>


            {/* Product information */}
            <div className="product-info">

                <h3 className="product-name">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="product-rating">
                    <span className="star">
                        ★
                    </span>

                    <span>
                        {product.rating}
                    </span>

                    <span className="reviews">
                        · {product.reviews} reviews
                    </span>
                </div>


                {/* Price */}
                <div className="price-row">

                    <span className="price">
                        ₹{product.price}
                    </span>

                    <span className="original-price">
                        ₹{product.originalPrice}
                    </span>

                    <span className="discount">
                        {product.discount}
                    </span>

                </div>


                {/* Button */}
                <button
                    className={`cart-button ${
                        !product.available ? "disabled" : ""
                    }`}
                    disabled={!product.available}
                >

                    {product.available
                        ? "ADD TO CART"
                        : "SOLD OUT"}

                </button>

            </div>

        </div>
    );
}

export default Card;