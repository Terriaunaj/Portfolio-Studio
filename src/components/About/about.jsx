import "./About.css"

import media1 from "../../assets/media/firstSundayTwo.mp4"

function About() {

    return(
        
        <section id ="about" className="about">

            <div className="about-container">

                    <div className="about-left">

                        <div className="about-media">
                                <video 
                                    className="about-video"
                                    src={media1}
                                    controls
                                    muted>   
                                </video>
                        </div>

                        <a
                            href="https://www.tiktok.com/@njetvbs?is_from_webapp=1&sender_device=pc"
                            target="_blank"
                            className="about-tiktok-button">
                            View More on TikTok
                        </a>

                    </div>

                    <div className="about-right">

                        <h2 className="about-title">About Me</h2>

                        <p className="about-text">
                            I&apos;m a Computer Science student at the University of Oklahoma who enjoys
                            blending technology with creativity. Beyond coding, I am drawn to work that helps
                            people feel engaged, supported, and understood. Alongside my coursework, 
                            I work as a Service Specialist for OU Information Technology, where I support users 
                            and help solve technical issues in real-world environments. 
                        </p>

                        <p className="about-text secondary">
                            Outside of the classroom, I&apos;ve been involved in creative and community driven work through my church, 
                            serving as a Vacation Bible School teacher, VBS content creator, and member of the church media team. 
                            These experiences have shaped my ability to communicate ideas clearly, think creatively, and 
                            design experiences that feel engaging and accessible.
                        </p>

                    </div>

            </div>
            
        </section>
    );
}

export default About;