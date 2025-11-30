import React from 'react';
import { FaCode, FaTools, FaDatabase, FaLaptopCode, FaServer } from 'react-icons/fa';

const Skills = () => {
    const skills = {
        'Programming Language': {
            icon: <FaCode className="me-2 text-pink-custom" />,
            list: ['Java', 'Python', 'JavaScript','PHP']
        },
        'Frontend': {
            icon: <FaLaptopCode className="me-2 text-pink-custom" />,
            list: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Redux', 'Bootstrap', 'Tailwind CSS']
        },
        'Backend': {
            icon: <FaServer className="me-2 text-pink-custom" />,
            list: ['Node.js', 'Express.js']
        },
        'Databases': {
            icon: <FaDatabase className="me-2 text-pink-custom" />,
            list: ['MongoDB', 'MySQL']
        },
        'Tools & Others': {
            icon: <FaTools className="me-2 text-pink-custom" />,
            list: ['Git', 'GitHub', 'VS Code', 'Webpack', 'RESTful APIs', 'Figma', 'Postman']
        }
    };

    return (
        <section id="skills" className="py-5">
            <h2 className="text-center text-pink-custom mb-5 animate-fade-in-up">My Skills 🛠️</h2>

            {Object.entries(skills).map(([category, { icon, list }], index) => (
                <div key={category} className="mb-4 animate-fade-in-up" style={{ animationDelay: `${0.2 * index}s`, animationDuration: '0.6s' }}>
                    <h4 className="text-light mb-3 d-flex align-items-center">{icon}{category}</h4>
                    <div className="d-flex flex-wrap gap-3">
                        {list.map((skill, i) => (
                            <div
                                key={i}
                                className="bg-dark border border-pink-custom text-light p-3 rounded shadow-sm animate-zoom-in"
                                style={{
                                    minWidth: '120px',
                                    textAlign: 'center',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skills;
