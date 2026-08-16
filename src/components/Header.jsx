import React from "react";
import "./Header.css";

const Header = () => {
    const navItems = [
        { name: "ABOUT", id: "about" },
        { name: "WORK", id: "projects" },
        { name: "SKILLS", id: "skills" },
        { name: "EDUCATION", id: "education" },
        { name: "CONTACT", id: "contact" },
    ];

    return (
        <header className="editorial-header">
            <div className="header-inner">

                {/* Logo */}
                <a href="#top" className="editorial-logo">
                    SACHIN
                    <span>YADAV</span>
                </a>

                {/* Navigation */}
                <nav className="editorial-nav">
                    {navItems.map((item, index) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="editorial-nav-link"
                        >
                            <span className="nav-number">
                                0{index + 1}
                            </span>
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Social Links */}
                <div className="editorial-socials">

                    <a
                        href="https://github.com/88sachincyber"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/sachin-yadav-cse/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://leetcode.com/u/cybersachin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LeetCode"
                    >
                        LeetCode
                    </a>

                </div>

                {/* Mobile menu button */}
                <button
                    className="editorial-menu"
                    type="button"
                    aria-label="Open navigation"
                    onClick={() => {
                        document
                            .querySelector(".editorial-nav")
                            ?.classList.toggle("nav-open");
                    }}
                >
                    <span />
                    <span />
                </button>

            </div>
        </header>
    );
};

export default Header;