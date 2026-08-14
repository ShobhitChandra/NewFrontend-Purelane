import React from "react";
import bundles from "../../data/bundle";
import BundleCard from "./BundleCard";
import "./Bundles.css";

function Bundles() {

    return (
        <section
            className="bundles-section"
            id="bundles"
        >

            {/* =========================
                HEADER
            ========================= */}

            <div className="bundles-header">

                <p className="bundles-eyebrow">
                    BUILD YOUR BUNDLE
                </p>

                <h2>
                    ONE BOX. EVERY ROOM.
                </h2>

                <p className="bundles-description">
                    Mix and match across kitchen, laundry, home and skin.
                    <br />
                    One flat price, no code needed, free shipping either way.
                </p>

            </div>


            {/* =========================
                BUNDLE CARDS
            ========================= */}

            <div className="bundles-grid">

                {bundles.map((bundle) => (

                    <BundleCard
                        key={bundle.id}
                        bundle={bundle}
                    />

                ))}

            </div>

        </section>
    );
}

export default Bundles;