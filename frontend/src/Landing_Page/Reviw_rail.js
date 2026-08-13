import React from "react";
import "./Review_rail.css";

function Review_rail() {
    return (
        <div className="ticker">
            <div className="track">

                <span>
                    Free shipping <b>on every bundle across India</b>
                </span>

                <span>
                    100% plant-based <b>and non-toxic</b>
                </span>

                <span>
                    Loved by <b>30,000+ happy homes</b>
                </span>

                <span>
                    Buy 3 <b>at flat ₹499</b>
                </span>

                {/* Duplicate for seamless loop */}

                <span>
                    Free shipping <b>on every bundle across India</b>
                </span>

                <span>
                    100% plant-based <b>and non-toxic</b>
                </span>

                <span>
                    Loved by <b>30,000+ happy homes</b>
                </span>

                <span>
                    Buy 3 <b>at flat ₹499</b>
                </span>

            </div>
        </div>
    );
}

export default Review_rail;