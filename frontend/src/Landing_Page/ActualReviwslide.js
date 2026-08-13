import React from "react";
import "./ActualReviewslide.css";

function ActulaReviewslide() {

    const reviews = [
        {
            title: "WORKS LIKE A CHARM",
            text: "Finally an eco option that cleans as well as the chemical detergent I used for years, and it smells better.",
            name: "ANITA",
            product: "LAUNDRY DETERGENT"
        },
        {
            title: "BEST DISHWASH EVER",
            text: "Our old dishwash left my hands dry, cracked skin. That stopped completely after we switched.",
            name: "PRIYA",
            product: "DISHWASH GEL"
        },
        {
            title: "GREAT PRODUCT, GREAT PACKAGING",
            text: "Very soft on hands with a lovely fragrance, and it feels good to be using far less plastic.",
            name: "SUNITA",
            product: "LIQUID HANDWASH"
        },
        {
            title: "DOG FRIENDLY",
            text: "We switched because chemical cleaners were setting off my dog's allergies. No reactions since.",
            name: "ROHIT S.",
            product: "FLOOR CLEANER"
        },
        {
            title: "FRESH AND EFFECTIVE",
            text: "The cleaning power is excellent and I love knowing that the ingredients are plant based.",
            name: "MEERA",
            product: "MULTI SURFACE CLEANER"
        }
    ];


    return (
        <section className="reviews-section">

            {/* TOP HEADING */}

            <div className="reviews-heading">

                <span>THAT'S WHAT THEY SAID</span>

                <span className="stars">
                    ★★★★★
                </span>

                <strong>4.8</strong>

                <span>
                    FROM 8,000+ REVIEWS
                </span>

                <span>
                    LOVED BY
                </span>

                <strong className="homes">
                    12 LAKH+
                </strong>

                <span>
                    HOMES
                </span>

            </div>


            {/* REVIEW CARDS */}

            <div className="reviews-slider">

                <div className="reviews-track">

                    {/* FIRST SET */}

                    {reviews.map((review, index) => (

                        <ReviewCard
                            review={review}
                            key={`first-${index}`}
                        />

                    ))}


                    {/* DUPLICATE SET FOR SEAMLESS LOOP */}

                    {reviews.map((review, index) => (

                        <ReviewCard
                            review={review}
                            key={`second-${index}`}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}


function ReviewCard({ review }) {

    return (
        <div className="review-card">

            <div className="review-stars">
                ★★★★★
            </div>

            <h3>
                {review.title}
            </h3>

            <p>
                {review.text}
            </p>

            <div className="review-author">

                <span className="check">
                    ✓
                </span>

                <strong>
                    {review.name}
                </strong>

                <span>
                    ·
                </span>

                <span>
                    {review.product}
                </span>

            </div>

        </div>
    );
}


export default ActulaReviewslide;