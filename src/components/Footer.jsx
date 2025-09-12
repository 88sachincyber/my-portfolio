import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-dark-custom text-center py-4 mt-5 shadow-lg rounded-top">
            <div className="container">
                <p className="mb-0 text-light animate-fade-in-up animate-delay-1">
                    &copy; {currentYear} Sachin Yadav. 
                </p>
                <div className="mt-2 animate-fade-in-up animate-delay-2">
                    <a href="https://github.com/88sachincyber" target="_blank" rel="noopener noreferrer" className="text-pink-custom mx-2">GitHub</a>
                    <a href="https://linkedin.com/in/sachin-yadav-cse/" target="_blank" rel="noopener noreferrer" className="text-pink-custom mx-2">LinkedIn</a>
                    {/* Add other social links as needed */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;