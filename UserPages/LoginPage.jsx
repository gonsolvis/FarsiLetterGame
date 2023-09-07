import "./users.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className=" LoginPage  ">
      <div className="LoginPage-box">
        <h1>Login</h1>

        <form className="login--form  ">
          <label>Email:</label>
          <input type="email" name="email" className="login--input" />

          <label>Password:</label>
          <input type="password" name="password" className="login--input" />

          <button type="submit" className="login--loginButton">
            Login
          </button>
        </form>
        <p className="login--p">
          Don't have an account yet?
          <Link to={"/signup"} className="login--signupLink">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
