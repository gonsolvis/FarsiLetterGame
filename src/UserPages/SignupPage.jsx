import { useState } from "react";
import "./users.css";
import { Link } from "react-router-dom";

function SignupPage() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [nativelanguage, setNativelanguage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let requestBody;

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    requestBody = {
      name,
      lastname,
      password,
      passwordRe,
      email,
      nativelanguage,
    };

    /*    if (name === "" || lastname === "" || email === "" || password === "" || passwordRe === "" || nativelanguage === "") {
    setErrorMessage("Please complete the mandatory fields.")
    return;
  } */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Provide a valid email address.");
      return;
    }

    /*   if (password !== passwordRe) {
    setErrorMessage("Passwords dont match.")
    return;
  } */

    /*   const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordRegex.test(password)) {
    setErrorMessage("Check for Password requirement")
    return;
  } */

    async function singUpAndLogin() {
      try {
        const signUpResponse = await authService.signup(requestBody);
        console.log("RESPONSE SIGN UP", signUpResponse);

        const { email, password } = requestBody;
        const loginResponse = await authService.login({ email, password });

        /*  const authToken = loginResponse.data.authToken;
      storeToken(authToken);
     */
        navigate(`/about_page`);
      } catch (error) {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      }
    }

    singUpAndLogin();
  };

  return (
    <>
      <div className="LoginPage">
        {errorMessage && (
          <div className="alert alert-danger alerta " role="alert">
            {errorMessage}
          </div>
        )}
        <div className="LoginPage-box">
          <h1>Sign Up</h1>

          <form className="login--form  ">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              className="login--input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Lastname:</label>
            <input
              type="text"
              name="lastname"
              className="login--input"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />

            <label>Native Lenguage:</label>
            <input
              type="text"
              name="nativelanguage"
              className="login--input"
              value={nativelanguage}
              onChange={(e) => setNativelanguage(e.target.value)}
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="login--input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password:</label>
            <input
              type="password"
              name="password"
              className="login--input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div id="emailHelp" class="form-text">
              Must have at least 6 characters,at least one number, one lowercase
              and one uppercase letter
            </div>

            <label>Repeat Password:</label>
            <input
              type="password"
              name="passwordRe"
              className="login--input"
              value={passwordRe}
              onChange={(e) => setPasswordRe(e.target.value)}
            />

            <button
              type="submit"
              className="login--loginButton"
              onClick={handleSignupSubmit}
            >
              {" "}
              Register
            </button>
          </form>

          <p className="login--p">
            Already have account?{" "}
            <Link to={"/login"} className="login--signupLink">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
