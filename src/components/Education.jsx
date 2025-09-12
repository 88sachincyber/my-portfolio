import React from 'react';

const Education = () => {
    const educationEntries = [
        {
            degree: 'Bachelor of Technology in Computer Science and Engineering',
            institution: 'R.R Institute of Modern Technology Lucknow (A.K.T.U)',
            years: '2019 - 2023',
            details: 'Focused on software development, algorithms, and data structures.'
        },
        {
            degree: 'Diploma in Computer Science and Engineering',
            institution: 'Janta Polytechnic Bulandshahr (B.T.E.U.P)',
            years: '2017 - 2019',
            details: 'Focused on computer fundamental, basics of programming.'
        },{
            degree: 'High School',
            institution: 'B.R.D.I.C Ballipatti Deoria (U.P. Board)',
            years: '2017 - 2019'
        },
    ];

    return (
        <section id="education" className="py-5">
            <h2 className="text-center text-pink-custom mb-5 animate-fade-in-up">Education 🎓</h2>
            <div className="list-group">
                {educationEntries.map((entry, index) => (
                    <div key={index} className="list-group-item list-group-item-action bg-dark text-light border-secondary mb-3 animate-fade-in-up" style={{ animationDelay: `${0.2 * index}s` }}>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1 text-pink-custom">{entry.degree}</h5>
                            <small className="text-muted">{entry.years}</small>
                        </div>
                        <p className="mb-1">{entry.institution}</p>
                        <small>{entry.details}</small>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;