import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">Manchester United</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Players</li>
        <li>About</li>
        <li className="nav-contact">Sign-in</li>
      </ul>
    </div>
  );
};

export default Navbar;
