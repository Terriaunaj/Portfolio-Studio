import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      {/* Border and title */}
      <h2 style={{ color: "#6B5B4C", fontWeight: "600" }}>
        Portfolio Studio🌿
      </h2>

      {/* Nav links*/}
      <div className="nav-links">
        <a className="nav-link" href="#home">Home</a>
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#projects">Projects</a>
        <a className="nav-link" href="#contact">Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;
