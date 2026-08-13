import React from "react";

function ComboCard({ product }) {

    return (
        <div className={`combo-card ${!product.available ? "sold-out" : ""}`}>

            {/* =========================
                TOP BADGES
            ========================= */}

            <div className="combo-top">

                <span className="combo-badge">
                    {product.badge}
                </span>

                {product.badgeType === "best" && (
                    <span className="best-value">
                        BEST VALUE
                    </span>
                )}

            </div>


            {/* =========================
                PRODUCT IMAGES
            ========================= */}

            <div className="combo-products">

                {product.products.map((item, index) => (

                    <div
                        className="combo-product"
                        key={index}
                    >

                        {item.image ? (
                            <img
                                src={item.image}
                                alt={item.name}
                            />
                        ) : (
                            <div className="no-image">
                                <i className="fa-solid fa-leaf"></i>
                            </div>
                        )}

                        <span>
                            {item.name}
                        </span>

                    </div>

                ))}

            </div>


            {/* =========================
                INFORMATION
            ========================= */}

            <div className="combo-info">

                <h2>
                    {product.shortName}
                </h2>

                <h4>
                    {product.productsCount} PRODUCTS
                </h4>

                <p>
                    {product.description}
                </p>


                {/* =========================
                    PRICE
                ========================= */}

                <div className="combo-price">

                    <strong>
                        ₹{product.price}
                    </strong>

                    <del>
                        ₹{product.originalPrice}
                    </del>

                    <span>
                        SAVE ₹{product.saving}
                    </span>

                </div>


                <small className="tax-info">
                    Inclusive of all taxes · COD available
                </small>


                {/* =========================
                    BUTTON
                ========================= */}

                <button
                    className="shop-combo-btn"
                    disabled={!product.available}
                >

                    {product.available
                        ? "SHOP BUNDLE"
                        : "SOLD OUT"
                    }

                    {product.available && (
                        <i className="fa-solid fa-arrow-right"></i>
                    )}

                </button>

            </div>

        </div>
    );
}

export default ComboCard;