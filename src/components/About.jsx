import React, { useEffect, useState } from "react";
import "./About.css";

const Typewriter = ({ words }) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        let timeout;

        if (!deleting && text.length < currentWord.length) {
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, text.length + 1));
            }, 75);
        } else if (!deleting && text.length === currentWord.length) {
            timeout = setTimeout(() => {
                setDeleting(true);
            }, 1800);
        } else if (deleting && text.length > 0) {
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, text.length - 1));
            }, 40);
        } else if (deleting && text.length === 0) {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [text, deleting, wordIndex, words]);

    return (
        <span className="hero-typewriter">
            {text}
            <span className="hero-cursor">|</span>
        </span>
    );
};

const About = () => {
    return (
        <section className="editorial-hero" id="about">

            {/* =====================================
                BACKGROUND
            ===================================== */}

            <div className="hero-paper" />
            <div className="hero-grid" />

            {/* Giant background number */}
            <div className="hero-number">01</div>


            {/* =====================================
                TOP INFORMATION
            ===================================== */}

            


            {/* =====================================
                MAIN HERO
            ===================================== */}

            <div className="hero-main">

                {/* =================================
                    LEFT SIDE — NAME
                ================================= */}

                <div className="hero-left">

                    <div className="hello-text">
                        HELLO
                        <span>—</span>
                        I'M
                    </div>

                    <h1 className="hero-name">
                        <span>SACHIN</span>
                        <span className="hero-name-second">
                            YADAV
                        </span>
                    </h1>

                    <div className="name-line" />

                </div>


                {/* =================================
                    RIGHT SIDE — INTRO
                ================================= */}

                <div className="hero-right">

                    <div className="build-label">
                        I BUILD
                    </div>

                    <h2 className="hero-role">
                        <Typewriter
                            words={[
                                "FULL STACK APPLICATIONS",
                                "AI POWERED PRODUCTS",
                                "MODERN WEB EXPERIENCES",
                                "SOFTWARE SOLUTIONS",
                            ]}
                        />
                    </h2>

                    <p className="hero-description">
                        Computer Science Engineering graduate passionate
                        about building thoughtful digital experiences,
                        scalable applications and solving real-world
                        problems through technology.
                    </p>


                    {/* Buttons */}
                    <div className="hero-actions">

                        <a
                            href="#contact"
                            className="editorial-button primary-button"
                        >
                            <span>HIRE ME</span>
                            <strong>↗</strong>
                        </a>

                        <a
                            href="/SachinYadav_Resume.pdf"
                            className="editorial-button secondary-button"
                            download
                        >
                            <span>DOWNLOAD RESUME</span>
                            <strong>↓</strong>
                        </a>

                    </div>

                </div>

            </div>


            {/* =====================================
                BIRDS
            ===================================== */}

            <div className="birds">

                <svg
                    className="bird bird-1"
                    viewBox="0 0 80 40"
                    aria-hidden="true"
                >
                    <path
                        d="M8 22 C18 10 29 10 40 21 C51 10 62 10 72 22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>

                <svg
                    className="bird bird-2"
                    viewBox="0 0 80 40"
                    aria-hidden="true"
                >
                    <path
                        d="M8 22 C18 10 29 10 40 21 C51 10 62 10 72 22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>

                <svg
                    className="bird bird-3"
                    viewBox="0 0 80 40"
                    aria-hidden="true"
                >
                    <path
                        d="M8 22 C18 10 29 10 40 21 C51 10 62 10 72 22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>

                <svg
                    className="bird bird-4"
                    viewBox="0 0 80 40"
                    aria-hidden="true"
                >
                    <path
                        d="M8 22 C18 10 29 10 40 21 C51 10 62 10 72 22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>

            </div>


            {/* =====================================
                SUN
            ===================================== */}

            <div className="hero-sun">
                <div className="sun-inner" />
            </div>


            {/* =====================================
                MOUNTAIN LANDSCAPE
            ===================================== */}

            <div className="mountain-landscape">

                <svg
                    className="mountains-svg"
                    viewBox="0 0 1600 650"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >

                    {/* FAR BACK MOUNTAINS */}

                    <path
                        className="mountain-back"
                        d="
                            M0 430
                            L120 350
                            L210 415
                            L330 280
                            L420 370
                            L550 240
                            L670 380
                            L790 270
                            L900 390
                            L1030 250
                            L1150 360
                            L1270 270
                            L1400 390
                            L1510 300
                            L1600 350
                            L1600 650
                            L0 650
                            Z
                        "
                    />


                    {/* MAIN MOUNTAINS */}

                    <path
                        className="mountain-main"
                        d="
                            M0 520
                            L170 390
                            L290 470
                            L470 220
                            L590 390
                            L735 100
                            L900 370
                            L1060 190
                            L1190 390
                            L1360 270
                            L1510 380
                            L1600 320
                            L1600 650
                            L0 650
                            Z
                        "
                    />


                    {/* SNOW CAPS */}

                    <path
                        className="mountain-snow"
                        d="
                            M470 220
                            L590 390
                            L540 345
                            L500 380
                            L465 335
                            L430 380
                            Z
                        "
                    />

                    <path
                        className="mountain-snow"
                        d="
                            M735 100
                            L900 370
                            L840 315
                            L805 350
                            L760 290
                            L720 340
                            Z
                        "
                    />

                    <path
                        className="mountain-snow"
                        d="
                            M1060 190
                            L1190 390
                            L1140 340
                            L1105 365
                            L1070 320
                            L1030 355
                            Z
                        "
                    />


                    {/* MOUNTAIN SHADE */}

                    <path
                        className="mountain-shade"
                        d="
                            M735 100
                            L735 650
                            L900 370
                            Z
                        "
                    />

                    <path
                        className="mountain-shade"
                        d="
                            M470 220
                            L470 650
                            L590 390
                            Z
                        "
                    />


                    {/* CONTOUR LINES */}

                    <g className="mountain-lines">

                        <path d="M735 100 L665 420" />

                        <path d="M760 150 L700 450" />

                        <path d="M790 210 L740 470" />

                        <path d="M470 220 L405 470" />

                        <path d="M500 275 L455 490" />

                        <path d="M1060 190 L990 460" />

                        <path d="M1090 240 L1030 480" />

                    </g>


                    {/* FRONT HILLS */}

                    <path
                        className="mountain-front"
                        d="
                            M0 530
                            C170 450 310 470 450 525
                            C590 580 690 510 820 520
                            C970 535 1090 470 1240 500
                            C1390 530 1490 480 1600 450
                            L1600 650
                            L0 650
                            Z
                        "
                    />

                </svg>


                {/* TREES */}

                <div className="mountain-trees">

                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />

                </div>

            </div>


            {/* =====================================
                COORDINATES
            ===================================== */}

            <div className="hero-coordinates">
                28°32'N&nbsp;&nbsp;77°23'E
            </div>


            {/* =====================================
                BOTTOM STRIP
            ===================================== */}

            <div className="hero-footer">

                <span>FULL STACK</span>

                <span>AI / WEB</span>

                <span>SOFTWARE</span>

                <span>AVAILABLE FOR OPPORTUNITIES</span>

            </div>

        </section>
    );
};

export default About;