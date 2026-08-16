import React from "react";
import "./Education.css";

const Education = () => {
    const educationEntries = [
        {
            number: "01",
            degree: "Bachelor of Technology",
            field: "Computer Science & Engineering",
            institution:
                "R.R Institute of Modern Technology, Lucknow",
            affiliation: "A.K.T.U",
            years: "2019 — 2023",
            description:
                "Focused on software development, algorithms and data structures.",
        },
        {
            number: "02",
            degree: "Diploma",
            field: "Computer Science & Engineering",
            institution:
                "Janta Polytechnic, Bulandshahr",
            affiliation: "B.T.E.U.P",
            years: "2017 — 2019",
            description:
                "Focused on computer fundamentals and programming basics.",
        },
        {
            number: "03",
            degree: "High School",
            field: "Secondary Education",
            institution:
                "B.R.D.I.C, Ballipatti, Deoria",
            affiliation: "U.P. Board",
            years: "2017 — 2019",
            description:
                "",
        },
    ];

    return (
        <section
            className="education-editorial"
            id="education"
        >

            {/* Background */}
            <div className="education-paper" />
            <div className="education-grid" />

            {/* =================================================
                MAIN TITLE
            ================================================= */}

            <div className="education-title">

                <span>MY</span>

                <h2>
                    EDUCATION
                </h2>

                <div className="education-title-line" />

            </div>


            {/* =================================================
                TIMELINE
            ================================================= */}

            <div className="education-timeline">

                {/* Vertical line */}
                <div className="timeline-line" />

                {educationEntries.map((entry) => (
                    <article
                        className="education-entry"
                        key={entry.number}
                    >

                        {/* Number */}
                        <div className="education-entry-number">
                            {entry.number}
                        </div>


                        {/* Timeline point */}
                        <div className="timeline-point">
                            <span />
                        </div>


                        {/* Years */}
                        <div className="education-years">
                            {entry.years}
                        </div>


                        {/* Main content */}
                        <div className="education-content">

                            <div className="education-degree">
                                {entry.degree}
                            </div>

                            <h3>
                                {entry.field}
                            </h3>

                            <div className="education-institution">
                                {entry.institution}
                            </div>

                            <div className="education-affiliation">
                                {entry.affiliation}
                            </div>

                            {entry.description && (
                                <p>
                                    {entry.description}
                                </p>
                            )}

                        </div>


                        {/* Decorative mark */}
                        <div className="education-mark">
                            <span />
                            <span />
                            <span />
                        </div>

                    </article>
                ))}

            </div>


            {/* =================================================
                BOTTOM INFORMATION
            ================================================= */}

            <div className="education-footer">

                <span>
                    COMPUTER SCIENCE
                </span>

                <span>
                    ENGINEERING
                </span>

                <span>
                    ACADEMIC FOUNDATION
                </span>

                <span>
                    ↓ CONTINUE
                </span>

            </div>


            {/* Large background number */}
            <div className="education-bg-number">
                04
            </div>

        </section>
    );
};

export default Education;