import React from "react";
import "./Bundles.css";

function BundleCard({ bundle }) {

    return (
        <div
            className={`bundle-card ${
                bundle.popular ? "popular-bundle" : ""
            }`}
        >

            {/* Tag */}
            <div className="bundle-tag">
                {bundle.tag}
            </div>


            {/* Product image area */}
            <div className="bundle-image-box">

                <div className="bundle-products">

                    {Array.from({ length: bundle.bottleCount }).map((_, index) => (
                        <span
                            key={index}
                            className="pimg p-kitchen"
                            role="img"
                            aria-label="Purelane foaming kitchen cleaner"
                        ></span>
                    ))}

                </div>

            </div>


            {/* Number of products */}
            <div className="bundle-product-count">

                <strong>
                    {bundle.products}
                </strong>

                <span>
                    PRODUCTS
                </span>

            </div>


            {/* Price */}
            <div className="bundle-price">

                <span className="bundle-current-price">
                    ₹{bundle.price}
                </span>

                <span className="bundle-original-price">
                    ₹{bundle.originalPrice}
                </span>

            </div>


            {/* Per product */}
            <p className="bundle-per-product">
                Flat ₹{bundle.perProduct} per product
            </p>


            {/* Features */}
            <div className="bundle-features">

                {bundle.features.map((feature, index) => (

                    <div
                        className="bundle-feature"
                        key={index}
                    >

                        <span className="feature-check">
                            ✓
                        </span>

                        <span>
                            {feature}
                        </span>

                    </div>

                ))}

            </div>


            {/* Button */}
            <button className="build-button">

                BUILD THIS BOX

                {bundle.popular && (
                    <span className="button-arrow">
                        →
                    </span>
                )}

            </button>

        </div>
    );
}

export default BundleCard;