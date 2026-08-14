import React, { useState } from "react";
import "./ClubSignup.css";

function ClubSignup() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setSuccess(false);

        // Empty email
        if (!email.trim()) {
            setError("Please enter your email address.");
            return;
        }

        // Email validation
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Success
        setSuccess(true);
        setEmail("");
    };

    return (
        <section className="club-section">

            <div className="club-box">

                <p className="club-small-title">
                    JOIN THE PURELANE CLUB
                </p>

                <h2>
                    GET ₹100 OFF YOUR FIRST BUNDLE
                </h2>

                <p className="club-description">
                    Plus first access to new launches and restocks.
                </p>


                <form
                    className="club-form"
                    onSubmit={handleSubmit}
                    noValidate
                >

                    <div className="email-wrapper">

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError("");
                                setSuccess(false);
                            }}
                            placeholder="your@email.com"
                            className={error ? "input-error" : ""}
                        />

                        {error && (
                            <p className="email-error">
                                {error}
                            </p>
                        )}

                    </div>


                    <button type="submit">
                        GET MY ₹100 OFF
                    </button>

                </form>


                {success && (
                    <div className="success-message">
                        ✓ You're in! Your ₹100 discount is ready.
                    </div>
                )}

            </div>

        </section>
    );
}

export default ClubSignup;