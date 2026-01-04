import "./Hero.css";
import profileImg from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-welcome"> Hello,<br></br>I'm Terriauna</h1>
        {/* <h1 className="hero-name">Terriauna</h1> */}
        <p className="hero-description">
            Welcome to my cozy corner on the web!☺️ 
            <br></br>
            I am a Computer Science student interested in full-stack development,
            creative coding, and building thoughtful digital experiences.
        </p>
      </div>

      <div className="hero-right">
        <img
            src={profileImg}
            alt="Photo of Terriauna"
            className="hero-photo"
        />
      </div>
    </section>
  );
}

export default Hero;
