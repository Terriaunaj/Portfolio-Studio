import "./Hero.css";
import profileImg from "../../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Container */}
      <div className="hero-container">
        {/* Left side */}
        <div className="hero-left">
          {/* Welcome (use &apos; for apostrophe issue with jsx)*/}
          <p className="hero-welcome">Hello, I&apos;m</p>
          {/* Name */}
          <h1 className="hero-name">Terriauna James</h1>
          <h2 className="hero-role">Computer Science Student | Aspiring Full-Stack Developer</h2>
          {/* My Shpill (use &apos; for apostrophe issue with jsx)*/}
          <p className="hero-description">
              Welcome to my cozy corner on the web!☺️ I&apos;m a Computer Science 
              student interested in full-stack development, creative coding, 
              and building thoughtful digital experiences.
          </p>
          {/* Buttons */}
          <div className="hero-buttons">
              <a href="#projects" className="hero-button">View Projects</a>
              <a href="#contact" className="hero-button secondary">Contact Me</a>
          </div>
        </div>
        {/* Right side */}
        <div className="hero-right">
          <img src={profileImg} alt="Photo of Terriauna" className="hero-photo"/>
        </div>

      </div>

    </section>
  );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

export default Hero;
