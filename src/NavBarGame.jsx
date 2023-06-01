import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/Ai";
import { AiOutlineHeart } from "react-icons/Ai";

function NavBarGame(props) {
  return (
    <nav id="navid" className="navbar navbar-expand  ">
      <a id="Navbar" className="navbar-brand" href="#">
        ScriptLit
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" id="home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/farsi_home" id="home" className="nav-link">
              Farsi
            </Link>
          </li>
          <li className="nav-item active">
            <a id="home" className="nav-link " href="#">
              Arabic
            </a>
          </li>
          <li className="nav-item active">
            <Link to="/about_page" id="home" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="score">
        <ul className="navbar-nav">
          <li>
            <a id="score" className="nav-link ">
              <AiFillHeart />
              <AiFillHeart />
              <AiFillHeart />
              <AiOutlineHeart />
              <AiOutlineHeart />
              <AiOutlineHeart />
              <AiOutlineHeart />
            </a>
          </li>
          <li className="nav-item active">
            <a id="score" className="nav-link ">
              Current Score : {props.currentScore}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarGame;
