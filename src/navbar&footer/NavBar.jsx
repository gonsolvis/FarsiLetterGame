import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav id="navid" className="navbar navbar-expand-lg navbar-light">
      <a id="Navbar" className="navbar-brand" href="#">
        ScriptLit |
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav pl-5uto">
          <li class="nav-item active">
            <Link to="/" id="home" className="nav-link pl-5">
              Home.
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/urdu_home" id="home" className="nav-link pl-5">
              Urdu.
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/arabic_home" id="home" className="nav-link pl-5">
              Arabic.
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/farsi_home" id="home" className="nav-link pl-5">
              Farsi.
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" id="home" className="nav-link pl-5">
              Sign Up.
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" id="home" className="nav-link pl-5">
              Log in.
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about_page" id="home" className="nav-link pl-5">
              About.
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
