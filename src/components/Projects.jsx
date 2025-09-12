import React from 'react';

const Projects = () => {
    // Example project data
    const projects = [
        {
            id: 1,
            title: 'Personal Portfolio',
            description: 'A personal portfolio website showcasing my technical skills, projects, certifications, and professional background. Built using React.js, it features responsive design, smooth animations, and integrated GitHub and LeetCode profiles for real-time project and problem-solving activity.',
            technologies: ['React', 'Bootstrap 5', 'JavaScript (ES6+)', 'SVG Icons',],
            githubLink: 'https://github.com/yourusername/ecommerce',
            liveLink: 'https://cyber-sachin.netlify.app/'
        },
        {
            id: 2,
            title: 'TempShare',
            description: 'Developed a secure, full-stack Temporary file sharing web application using React (frontend) and Node.js/Express (backend). Implemented user authentication with JWT, anonymous and authenticated file uploads, and RESTful APIs. Deployed the frontend on Vercel and backend on Render, ensuring seamless cross-origin communication and responsive design with Tailwind CSS.',
            technologies: ['React','Vite','Tailwind CSS', 'ExpressJS', 'NodeJS', 'MongoDB','Vercel','Render','JWT'],
            githubLink: 'https://github.com/yourusername/task-app',
            liveLink: 'https://client-flame-seven-98.vercel.app/signup#/'
        },
        {
            id: 2,
            title: 'LiveChatHub',
            description: 'Developed a secure, full-stack real-time chat application with React (frontend) and Node.js/Express (backend). Implemented JWT-based authentication with bcrypt, real-time messaging using Socket.IO, and PostgreSQL for scalable storage. Deployed on Render with responsive UI, online user indicators, and cross-origin protection using CORS and security middleware.',
            technologies: ['Node.js', 'Express.js', 'Socket.IO', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript', 'JWT', 'bcrypt'],
            githubLink: 'https://github.com/yourusername/task-app',
            liveLink: 'https://chat-app-f22d.onrender.com/'
        },
        // Add more projects as needed
    ];

    return (
        <section id="projects" className="py-5">
            <h2 className="text-center text-pink-custom mb-5 animate-fade-in-up">My Projects 🚀</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                {projects.map((project, index) => (
                    <div className="col animate-scale-in" style={{ animationDelay: `${0.2 * index}s` }} key={project.id}>
                        <div className="card h-100 bg-dark text-light border-secondary shadow-custom">
                            <div className="card-body">
                                <h5 className="card-title text-pink-custom">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <div className="mb-3">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="badge bg-secondary me-1 mb-1">{tech}</span>
                                    ))}
                                </div>
                                <div className="d-flex justify-content-between">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-pink-custom">
                                        GitHub
                                    </a>
                                    {project.liveLink && (
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-pink-custom">
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;