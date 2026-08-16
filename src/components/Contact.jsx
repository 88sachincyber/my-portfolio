import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
    const formRef = useRef();
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setSending(true);
        setSent(false);

        emailjs
            .sendForm(
                "service_puz8nmi",
                "template_42nkker",
                formRef.current,
                "Rq3Jvy1ZliTof_47Y"
            )
            .then(
                (result) => {
                    console.log(result.text);

                    setSent(true);
                    setSending(false);

                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);

                    setSending(false);

                    alert(
                        "Failed to send message. Please try again."
                    );
                }
            );
    };

    return (
        <section
            className="contact-editorial"
            id="contact"
        >

            {/* Background */}
            <div className="contact-paper" />
            <div className="contact-grid" />



            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div className="contact-main">


                {/* =================================================
                    LEFT SIDE
                ================================================= */}

                <div className="contact-left">

                    <div className="contact-small">
                        LET'S TALK
                    </div>

                    <h2 className="contact-title">
                        GOT AN
                        <br />
                        <em>IDEA?</em>
                    </h2>

                    <p className="contact-description">
                        Whether you're looking for a developer,
                        have a project in mind, or just want to
                        connect — drop me a message.
                    </p>


                    {/* Email */}

                    <div className="contact-direct">

                        <span>
                            DIRECT CONTACT
                        </span>

                        <a
                            href="mailto:yksachin88@gmail.com"
                        >
                            yksachin88@gmail.com
                            <strong>↗</strong>
                        </a>

                    </div>


                    {/* Social links */}

                    <div className="contact-socials">

                        <a
                            href="https://github.com/88sachincyber"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GITHUB
                            <span>↗</span>
                        </a>

                        <a
                            href="https://linkedin.com/in/sachin-yadav-cse/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LINKEDIN
                            <span>↗</span>
                        </a>

                        <a
                            href="https://instagram.com/sachin_y2315"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            INSTAGRAM
                            <span>↗</span>
                        </a>

                    </div>

                </div>


                {/* =================================================
                    RIGHT SIDE — FORM
                ================================================= */}

                <div className="contact-right">

                    <div className="form-heading">

                        <span>
                            01 / SEND MESSAGE
                        </span>

                        <span>
                            I'LL GET BACK TO YOU
                        </span>

                    </div>


                    <form
                        ref={formRef}
                        onSubmit={sendEmail}
                        className="editorial-form"
                    >

                        {/* Name */}

                        <div className="form-field">

                            <label htmlFor="name">
                                01 — YOUR NAME
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                placeholder="Enter your name"
                                required
                            />

                        </div>


                        {/* Email */}

                        <div className="form-field">

                            <label htmlFor="email">
                                02 — YOUR EMAIL
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                placeholder="you@example.com"
                                required
                            />

                        </div>


                        {/* Message */}

                        <div className="form-field">

                            <label htmlFor="message">
                                03 — YOUR MESSAGE
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Tell me a little about your idea..."
                                required
                            />

                        </div>


                        {/* Submit */}

                        <button
                            type="submit"
                            className="contact-submit"
                            disabled={sending}
                        >

                            <span>
                                {sending
                                    ? "SENDING..."
                                    : "SEND MESSAGE"}
                            </span>

                            <strong>
                                {sending ? "..." : "↗"}
                            </strong>

                        </button>


                        {/* Success */}

                        {sent && (
                            <div className="contact-success">
                                <span>✓</span>
                                MESSAGE SENT SUCCESSFULLY.
                                I'LL GET BACK TO YOU SOON.
                            </div>
                        )}

                    </form>

                </div>

            </div>


            {/* =================================================
                BOTTOM STRIP
            ================================================= */}

            <div className="contact-footer">

                <span>
                    NOIDA, INDIA
                </span>

                <span>
                    SOFTWARE / FULL STACK / AI
                </span>

                <span>
                    2026
                </span>

                <span>
                    THANK YOU FOR VISITING
                </span>

            </div>


            {/* =================================================
                LARGE BACKGROUND NUMBER
            ================================================= */}

            <div className="contact-bg-number">
                05
            </div>

        </section>
    );
};

export default Contact;