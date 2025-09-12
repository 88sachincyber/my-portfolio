import React from 'react';

const Header = () => {
    const navItems = [
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Skills', id: 'skills' },
        { name: 'Education', id: 'education' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <header className="bg-dark-custom shadow-lg py-3 rounded-bottom position-sticky top-0 z-3">
            <nav className="navbar navbar-expand-lg navbar-dark container">
                <span className="navbar-brand h1 mb-0 fs-3 text-pink-custom animate-fade-in-up animate-delay-1">
                    <span className="text-light">Sachin</span> Yadav
                </span>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        {navItems.map((item, index) => (
                            <li className="nav-item" key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`nav-link text-light animate-fade-in-up animate-delay-${index + 2}`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Social Icons */}
                    <div className="d-flex gap-3 ms-lg-4 animate-fade-in-up animate-delay-4">
                        <a href="https://github.com/88sachincyber" target="_blank" rel="noopener noreferrer"
                            className="text-light-50 text-decoration-none">
                            {/* GitHub Icon (inline SVG for simplicity without another CDN) */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1-1.756-1.333-.731-.546.084-.716.084-.716 1.192.085 1.816 1.258 1.816 1.258 1.052 1.813 2.928 1.293 3.632.989.102-.777.404-1.293.737-1.593-2.809-.321-5.753-1.405-5.753-6.224 0-1.378.484-2.503 1.287-3.396-.103-.321-.446-1.603.098-3.356 0 0 1.047-.34 3.425 1.291.994-.274 2.05-.409 3.107-.414 1.056.005 2.112.14 3.106.414 2.379-1.631 3.424-1.291 3.424-1.291.545 1.753.202 3.035.099 3.356.803.893 1.286 2.018 1.286 3.396 0 4.832-2.948 5.907-5.762 6.219.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/sachin-yadav-cse/" target="_blank" rel="noopener noreferrer"
                            className="text-light-50 text-decoration-none">
                            {/* LinkedIn Icon (inline SVG) */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href="https://leetcode.com//u/cybersachin/" target="_blank" rel="noopener noreferrer"
                            className="text-decoration-none">
                            {/* LeetCode Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#FFA116" d="M21.59 12.94L16.7 17.83a1.2 1.2 0 0 1-1.7-1.7l3.42-3.42h-9.69a1.2 1.2 0 0 1 0-2.4h9.7L15 7.3a1.2 1.2 0 1 1 1.7-1.7l4.88 4.88a1.2 1.2 0 0 1 0 1.7z" />
                                <path fill="#000000" d="M9.17 19.2a1.2 1.2 0 0 1-1.7 1.7l-4.7-4.7a6.79 6.79 0 0 1 0-9.55l4.7-4.7a1.2 1.2 0 0 1 1.7 1.7L3.86 7.65a4.39 4.39 0 0 0 0 6.2l5.3 5.35z" />
                            </svg>
                        </a>

                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
