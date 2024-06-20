import { Link } from "react-router-dom";
import "../style/navbar.scss";

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        Pizza Website DevBaoo
      </a>
      <ul className="nav-link">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
