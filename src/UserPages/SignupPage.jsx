import "./users.css";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div className="LoginPage">
      <div className="LoginPage-box">
        <h1>Sign Up</h1>

        <form className="login--form  ">
          <label>Name:</label>
          <input type="text" name="name" className="login--input" />

          <label>Surname/s:</label>
          <input type="text" name="surname" className="login--input" />

          <label>Username:</label>
          <input type="text" name="Username" className="login--input" />

          <label>Email:</label>
          <input type="email" name="email" className="login--input" />

          <label>Password:</label>
          <input type="password" name="password" className="login--input" />

          <button type="submit" className="login--loginButton">
            Register
          </button>
        </form>

        <p className="login--p">
          Already have account?
          <Link to={"/login"} className="login--signupLink">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
