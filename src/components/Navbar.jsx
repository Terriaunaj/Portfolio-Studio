import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <h2 style={{ color: "#6B5B4C", fontWeight: "600" }}>
        Portfolio Studio🌿
      </h2>

      <div className="nav-links">
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Projects</a>
        <a className="nav-link" href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
