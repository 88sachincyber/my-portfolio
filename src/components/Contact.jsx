import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();
    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_puz8nmi',          // 🔁 Replace with your actual service ID
            'template_42nkker',         // ✅ Your real template ID
            formRef.current,
            'Rq3Jvy1ZliTof_47Y'           // 🔁 Replace with your actual public key
        ).then(
            (result) => {
                console.log(result.text);
                setSent(true);
                e.target.reset();
            },
            (error) => {
                console.log(error.text);
                alert("❌ Failed to send message. Please try again.");
            }
        );
    };

    return (
        <section id="contact" className="py-5">
            <div className="container">
                <h2 className="text-center text-pink-custom mb-5 animate-fade-in-up">Get in Touch ✉️</h2>

                {/* Contact Form */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 animate-fade-in-up">
                        <div className="p-4 border rounded-4 shadow-sm bg-dark-custom">
                            <p className="lead mb-4 text-center">Have a project or just want to say hello? 👋</p>
                            <form ref={formRef} onSubmit={sendEmail}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" id="name" name="user_name" className="form-control bg-dark text-light border-secondary" placeholder="Your Name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" id="email" name="user_email" className="form-control bg-dark text-light border-secondary" placeholder="you@example.com" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea id="message" name="message" className="form-control bg-dark text-light border-secondary" rows="5" placeholder="Let's talk..." required></textarea>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-pink-custom btn-lg">Send Message</button>
                                </div>
                                {sent && <p className="mt-3 text-success text-center animate-fade-in-up">✅ Message sent successfully!</p>}
                            </form>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="row justify-content-center">
                    <div className="col-lg-6 animate-fade-in-up text-center">
                        <div className="p-4 border rounded-4 shadow-sm bg-dark-custom">
                            <p className="mb-3 fs-5">Find me on:</p>
                            <div className="d-flex justify-content-center flex-wrap gap-3 fs-4">
                                <a href="mailto:yksachin88@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">📧</a>
                                <a href="https://github.com/88sachincyber" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="bi bi-github"></i></a>
                                <a href="https://linkedin.com/in/sachin-yadav-cse/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="bi bi-linkedin"></i></a>
                                <a href="https://instagram.com/sachin_y2315" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
