import "./contact.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
    return(
        
        <section id ="contact" className="contact">

            <div className="contact-container">

                <h2 className="contact-title">Contact</h2>

                <p className="contact-text">
                    Feel free to reach out if you would like to connect, 
                    collab, or just say hi!
                </p>

                <div className="contact-links">
                    <a href="mailto:terriaunaj3@gmail.com" className="contact-links">
                        <MdEmail></MdEmail>
                    </a>
                    <a href="https://github.com/terriaunaj" target="_blank" className="contact-links">
                        <FaGithub></FaGithub>
                    </a>
                    <a href="https://linkedin.com/in/terriauna-james" target="blank" className="contact-links">
                        <FaLinkedin></FaLinkedin>
                    </a>
                </div>

                <div className="contact-resume">
                    <a href="/resume.pdf" download className="contact-link-resume">Download Resume</a>
                </div>

            </div>
            
        </section>
    );
}

export default Contact;