import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'TempShare',
            description: 'Developed a secure, full-stack Temporary file sharing web application using React (frontend) and Node.js/Express (backend). Implemented user authentication with JWT, anonymous and authenticated file uploads, and RESTful APIs. Deployed the frontend on Vercel and backend on Render, ensuring seamless cross-origin communication and responsive design with Tailwind CSS.',
            technologies: ['React', 'Vite', 'Tailwind CSS', 'ExpressJS', 'NodeJS', 'MongoDB', 'Vercel', 'Render', 'JWT'],
            githubLink: 'https://github.com/88sachincyber/client',
            liveLink: 'https://client-flame-seven-98.vercel.app/signup#/'
        },
        {
            id: 2,
            title: 'LiveChatHub',
            description: 'Developed a secure, full-stack real-time chat application with React (frontend) and Node.js/Express (backend). Implemented JWT-based authentication with bcrypt, real-time messaging using Socket.IO, and PostgreSQL for scalable storage. Deployed on Render with responsive UI, online user indicators, and cross-origin protection.',
            technologies: ['Node.js', 'Express.js', 'Socket.IO', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript', 'JWT', 'bcrypt'],
            githubLink: 'https://github.com/88sachincyber/chat-app',
            liveLink: 'https://chat-app-f22d.onrender.com/'
        },
        {
            id: 3,
            title: 'Course Explorer',
            description: 'Built a fully interactive course-learning platform using React, Vite, and Tailwind CSS with Markdown rendering, search, progress tracking, and admin dashboard with course builder. Deployed on Vercel.',
            technologies: [
                'React.js', 'Vite', 'Tailwind CSS',
                'React Router', 'react-markdown',
                'LocalStorage', 'JavaScript (ES6+)', 'Vercel'
            ],
            githubLink: 'https://github.com/88sachincyber/Course_Explorer',
            liveLink: 'https://course-explorer-six.vercel.app'
        },
        {
            id: 4,
            title: 'LibraTrack — Library Management System',
            description: 'Library Management System using PHP and MySQL (XAMPP). Includes signup/login, role-based access, book management, fine calculation, membership management, reporting, and validations.',
            technologies: [
                'PHP', 'MySQL', 'HTML5', 'CSS3',
                'JavaScript', 'Apache', 'XAMPP',
                'PDO', 'Session Management', 'CRUD Operations'
            ],
            githubLink: 'https://github.com/88sachincyber/library-management',
            liveLink: '' 
        },
        {
            id: 5,
            title: 'Personal Portfolio',
            description: 'A portfolio website showcasing skills, projects, and profiles. Built with React.js, responsive UI, animations, and GitHub/LeetCode integrations.',
            technologies: ['React', 'Bootstrap 5', 'JavaScript (ES6+)', 'SVG Icons'],
            githubLink: 'https://github.com/88sachincyber/my-portfolio',
            liveLink: 'https://cyber-sachin.netlify.app/'
        },
    ];

    return (
        <section id="projects" className="py-5">
            <h2 className="text-center text-pink-custom mb-5 animate-fade-in-up">My Projects 🚀</h2>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                {projects.map((project, index) => (
                    <div
                        className="col animate-scale-in"
                        style={{ animationDelay: `${0.2 * index}s` }}
                        key={project.id}
                    >
                        <div className="card h-100 bg-dark text-light border-secondary shadow-custom">
                            <div className="card-body">
                                <h5 className="card-title text-pink-custom">{project.title}</h5>
                                <p className="card-text">{project.description}</p>

                                <div className="mb-3">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="badge bg-secondary me-1 mb-1">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* ---- Buttons ---- */}
                                <div className="d-flex justify-content-between">
                                    {/* GitHub Button (only if available) */}
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn-outline-pink-custom"
                                        >
                                            GitHub
                                        </a>
                                    )}

                                    {/* Live Demo Button (only if available) */}
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn-pink-custom"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                                {/* ---------------- */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;