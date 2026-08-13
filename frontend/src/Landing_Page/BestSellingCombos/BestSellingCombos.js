import React, { useRef } from "react";
import products from "../../data/products";
import combos from "../../data/combos";
import ComboCard from "./ComboCard";

import "./BestSellingCombos.css";

function BestSellingCombos() {

    const sliderRef = useRef(null);

    const comboCards = combos.map((combo) => {
        const matchedProducts = combo.productIds
            .map((productId) => products.find((product) => product.id === productId))
            .filter(Boolean)
            .slice(0, 3);

        return {
            ...combo,
            badgeType: combo.bestValue ? "best" : "normal",
            shortName: combo.name,
            products: matchedProducts,
            productsCount: matchedProducts.length,
            saving: Math.max(combo.originalPrice - combo.price, 0),
            available: !combo.name.toLowerCase().includes("sold out")
        };
    });

    const scrollLeft = () => {

        sliderRef.current.scrollBy({
            left: -400,
            behavior: "smooth"
        });

    };


    const scrollRight = () => {

        sliderRef.current.scrollBy({
            left: 400,
            behavior: "smooth"
        });

    };


    return (
        <section
            id="bundles"
            className="combos-section"
        >

            {/* =========================
                HEADER
            ========================= */}

            <div className="combos-header">

                <span className="combos-small-title">
                    PRE-BUILT TO SAVE YOU MONEY
                </span>

                <h1>
                    BEST SELLING COMBOS
                </h1>


                {/* divider */}

                <div className="combos-divider">

                    <span></span>

                    <i className="fa-solid fa-leaf"></i>

                    <span></span>

                </div>


                <p>
                    Swipe through the boxes people order most.
                    Each one is already priced below buying the
                    same products on their own.
                </p>

            </div>


            {/* =========================
                ARROWS
            ========================= */}

            <div className="combo-controls">

                <button
                    onClick={scrollLeft}
                    aria-label="Previous bundles"
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </button>


                <button
                    onClick={scrollRight}
                    aria-label="Next bundles"
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </button>

            </div>


            {/* =========================
                PRODUCT SCROLLER
            ========================= */}

            <div
                className="combos-slider"
                ref={sliderRef}
            >

                {comboCards.map((product) => (

                    <ComboCard
                        key={product.id}
                        product={product}
                    />

                ))}

            </div>

        </section>
    );
}

export default BestSellingCombos;