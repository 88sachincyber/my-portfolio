import React from "react";
import "./Skills.css";

const Skills = () => {
    const skills = [
        {
            number: "01",
            category: "PROGRAMMING",
            description: "Languages I use to build and solve problems.",
            items: [
                "Java",
                "Python",
                "JavaScript(ES6+)",
                "PHP",
            ],
        },
        {
            number: "02",
            category: "FRONTEND",
            description: "Building responsive and interactive interfaces.",
            items: [
                "HTML5",
                "CSS3",
                "React.js",
                "Redux",
                "Bootstrap",
                "Tailwind CSS",
            ],
        },
        {
            number: "03",
            category: "BACKEND",
            description: "Developing APIs and server-side applications.",
            items: [
                "Node.js",
                "Express.js",
                "FastAPI",
                "REST APIs",
                "JSON"
            ],
        },
        {
            number: "04",
            category: "DATABASES",
            description: "Working with relational and NoSQL data.",
            items: [
                "MongoDB",
                "MySQL",
                "PostgreSQL",
            ],
        },
        {
            number: "05",
            category: "TOOLS & OTHERS",
            description: "Tools and technologies used across projects.",
            items: [
                "DSA",
                "Git",
                "GitHub",
                "VS Code",
                "Webpack",
                "Figma",
                "Postman",
                "Render",
                "Vercel",
                "Authentication & Authorization",
                "OOP",
            ],
        },
    ];

    return (
        <section className="skills-editorial" id="skills">

            {/* Background */}
            <div className="skills-paper" />
            <div className="skills-grid" />



            {/* Main heading */}
            <div className="skills-heading">

                <span>MY</span>

                <h2>
                    SKILLS
                </h2>

                <span className="heading-line" />

            </div>


            {/* Skill categories */}
            <div className="skills-list">

                {skills.map((skill) => (
                    <article
                        className="skill-row"
                        key={skill.number}
                    >

                        {/* Number */}
                        <div className="skill-number">
                            {skill.number}
                        </div>


                        {/* Category */}
                        <div className="skill-category">

                            <h3>
                                {skill.category}
                            </h3>

                            <p>
                                {skill.description}
                            </p>

                        </div>


                        {/* Skill list */}
                        <div className="skill-items">

                            {skill.items.map((item, index) => (
                                <span
                                    className="skill-item"
                                    key={item}
                                >
                                    <span className="skill-item-index">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    {item}
                                </span>
                            ))}

                        </div>

                    </article>
                ))}

            </div>


            {/* Bottom */}
            <div className="skills-bottom">

                <span>
                    SOFTWARE ENGINEERING
                </span>

                <span>
                    FULL STACK / WEB / AI
                </span>

                <span>
                    05 CATEGORIES
                </span>

                <span>
                    ↓ CONTINUE
                </span>

            </div>


            {/* Decorative number */}
            <div className="skills-bg-number">
                02
            </div>

        </section>
    );
};

export default Skills;