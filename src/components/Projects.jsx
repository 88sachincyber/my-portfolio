import React from "react";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            id: "01",
            title: "TempShare",
            type: "FULL STACK / FILE SHARING",
            description:
                "A secure temporary file-sharing platform built with React and Node.js. Includes JWT authentication, anonymous and authenticated uploads, RESTful APIs and cloud deployment.",
            technologies: [
                "React",
                "Vite",
                "Tailwind CSS",
                "ExpressJS",
                "NodeJS",
                "MongoDB",
                "JWT",
                "Vercel",
                "Render",
            ],
            githubLink:
                "https://github.com/88sachincyber/client",
            liveLink:
                "https://client-flame-seven-98.vercel.app/signup#/",
        },
        {
            id: "02",
            title: "LiveChatHub",
            type: "FULL STACK / REAL-TIME",
            description:
                "A real-time chat application with JWT authentication, bcrypt password security, Socket.IO messaging and PostgreSQL storage. Includes online user indicators and responsive UI.",
            technologies: [
                "Node.js",
                "Express.js",
                "Socket.IO",
                "PostgreSQL",
                "HTML5",
                "CSS3",
                "JavaScript",
                "JWT",
                "bcrypt",
            ],
            githubLink:
                "https://github.com/88sachincyber/chat-app",
            liveLink:
                "https://chat-app-f22d.onrender.com/",
        },
        {
            id: "03",
            title: "Course Explorer",
            type: "EDTECH / REACT",
            description:
                "An interactive course-learning platform featuring Markdown rendering, search, progress tracking and an admin dashboard with a course builder.",
            technologies: [
                "React.js",
                "Vite",
                "Tailwind CSS",
                "React Router",
                "react-markdown",
                "LocalStorage",
                "JavaScript",
                "Vercel",
            ],
            githubLink:
                "https://github.com/88sachincyber/Course_Explorer",
            liveLink:
                "https://course-explorer-six.vercel.app",
        },
        {
            id: "04",
            title: "LibraTrack",
            type: "PHP / MYSQL / MANAGEMENT",
            description:
                "A library management system built with PHP and MySQL. Includes authentication, role-based access, book management, fine calculation, membership management and reporting.",
            technologies: [
                "PHP",
                "MySQL",
                "HTML5",
                "CSS3",
                "JavaScript",
                "Apache",
                "XAMPP",
                "PDO",
                "Session Management",
                "CRUD",
            ],
            githubLink:
                "https://github.com/88sachincyber/library-management",
            liveLink: "",
        },
        {
            id: "05",
            title: "Personal Portfolio",
            type: "REACT / CREATIVE DEVELOPMENT",
            description:
                "A personal portfolio designed to showcase projects, technical skills and professional profiles with responsive layouts, animations and developer integrations.",
            technologies: [
                "React",
                "Bootstrap 5",
                "JavaScript",
                "SVG Icons",
            ],
            githubLink:
                "https://github.com/88sachincyber/my-portfolio",
            liveLink:
                "https://cyber-sachin.netlify.app/",
        },
    ];

    return (
        <section className="projects-editorial" id="projects">

            {/* Background */}
            <div className="projects-paper" />
            <div className="projects-grid" />


            {/* =================================================
                TITLE
            ================================================= */}

            <div className="projects-title">

                

                <h2>PROJECTS</h2>

                <div className="projects-title-line" />

            </div>


            {/* =================================================
                PROJECT LIST
            ================================================= */}

            <div className="projects-list">

                {projects.map((project, index) => (
                    <article
                        className={`project-row ${
                            index % 2 !== 0
                                ? "project-row-reverse"
                                : ""
                        }`}
                        key={project.id}
                    >

                        {/* Project number */}
                        <div className="project-index">
                            {project.id}
                        </div>


                        {/* Project identity */}
                        <div className="project-identity">

                            <div className="project-type">
                                {project.type}
                            </div>

                            <h3>
                                {project.title}
                            </h3>

                            <div className="project-mark">
                                <span />
                                <span />
                                <span />
                            </div>

                        </div>


                        {/* Project details */}
                        <div className="project-details">

                            <p>
                                {project.description}
                            </p>


                            {/* Technologies */}

                            <div className="project-tech">

                                <div className="tech-label">
                                    TECHNOLOGY
                                </div>

                                <div className="tech-list">

                                    {project.technologies.map(
                                        (tech, techIndex) => (
                                            <span key={tech}>
                                                <small>
                                                    {String(
                                                        techIndex + 1
                                                    ).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </small>

                                                {tech}
                                            </span>
                                        )
                                    )}

                                </div>

                            </div>


                            {/* Links */}

                            <div className="project-links">

                                {project.githubLink && (
                                    <a
                                        href={
                                            project.githubLink
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        GITHUB
                                        <span>↗</span>
                                    </a>
                                )}

                                {project.liveLink && (
                                    <a
                                        href={
                                            project.liveLink
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link project-link-dark"
                                    >
                                        LIVE DEMO
                                        <span>↗</span>
                                    </a>
                                )}

                            </div>

                        </div>


                        {/* Decorative side number */}
                        <div className="project-side-number">
                            {project.id}
                        </div>

                    </article>
                ))}

            </div>


            {/* =================================================
                FOOTER
            ================================================= */}

            <div className="projects-footer">

                <span>
                    05 SELECTED PROJECTS
                </span>

                <span>
                    FULL STACK / WEB / SOFTWARE
                </span>

                <span>
                    2026
                </span>

                <span>
                    ↓ NEXT
                </span>

            </div>


            {/* Large background number */}
            <div className="projects-bg-number">
                03
            </div>

        </section>
    );
};

export default Projects;