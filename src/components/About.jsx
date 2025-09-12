import React, { useEffect, useState } from 'react';
import ProfileImage from '../assets/profile.jpg';

const Typewriter = ({ words }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        if (isTyping) {
            if (displayText.length < currentWord.length) {
                const timeout = setTimeout(() => {
                    setDisplayText(currentWord.slice(0, displayText.length + 1));
                }, 200); // typing speed
                return () => clearTimeout(timeout);
            } else {
                // Finished typing, wait, then clear
                const pause = setTimeout(() => {
                    setIsTyping(false);
                }, 1500); // pause after full word
                return () => clearTimeout(pause);
            }
        } else {
            // Clear text instantly and start next word
            const clear = setTimeout(() => {
                setDisplayText('');
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
                setIsTyping(true);
            }, 200); // delay before starting next word
            return () => clearTimeout(clear);
        }
    }, [displayText, isTyping, currentWordIndex, words]);

    return (
        <span className="typewriter-text">
            {displayText}
            <span className="blinking-cursor">|</span>
        </span>
    );
};


const About = () => {
    return (
        <section className="about-section text-center text-md-start">
            <div className="row align-items-center justify-content-center">
                {/* Text Content */}
                <div className="col-12 col-md-6 order-md-1 order-2 mt-4 mt-md-0">
                    <h5 className="text-pink-custom animate-fade-in-up animate-delay-1">HELLO 👋</h5>
                    <h1 className="display-3 fw-bold animate-fade-in-up animate-delay-2">
                        I'm <span className="text-light">Sachin Yadav</span> a <br />
                        <span className="text-pink-custom">
                            <Typewriter
                                words={[
                                    'Web Developer',
                                    'React Developer',
                                    'UI/UX Designer',
                                    'MERN Stack Developer'
                                ]}
                            />
                        </span>
                    </h1>
                    <p className="lead mt-4 animate-fade-in-up animate-delay-3">
                        I am a passionate and dedicated Computer Science student with a strong foundation in programming, full-stack development, Data Structure & Algorithm and problem-solving. My goal is to leverage my technical skills to build impactful and user-centric software solutions. I aim to join an innovative organization where I can grow as a developer, contribute meaningfully to projects, and continue learning new technologies to stay ahead in the ever-evolving tech landscape.
                    </p>

                    {/* Buttons */}
                    <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                        <a
                            href="https://www.linkedin.com/in/sachin-yadav-cse/"
                            className="btn btn-pink-custom btn-lg mt-4 me-3 animate-scale-in animate-delay-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Let's Connect!
                        </a>

                        <a
                            href="/SachinYadav_Resume.pdf"
                            className="btn btn-outline-light btn-lg mt-4 animate-scale-in animate-delay-4"
                            download
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="col-12 col-md-5 order-md-2 order-1 text-center">
                    <img
                        src={ProfileImage}
                        alt="Sachin Yadav"
                        className="img-fluid rounded-circle-custom shadow-custom animate-scale-in"
                        style={{ maxWidth: '400px', width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                </div>
            </div>

            {/* Typewriter effect styling */}
            <style jsx>{`
                .typewriter-text {
                    font-weight: bold;
                    font-size: 1.5rem;
                    white-space: nowrap;
                }

                .blinking-cursor {
                    display: inline-block;
                    width: 1px;
                    background-color: currentColor;
                    animation: blink 0.7s steps(1) infinite;
                    margin-left: 3px;
                }

                @keyframes blink {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 1; }
                }
            `}</style>
        </section>
    );
};

export default About;
