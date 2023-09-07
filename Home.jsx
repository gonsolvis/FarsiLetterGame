import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "./home.css";

function Home(props) {
  console.log("props", props);
  return (
    <div className="homePage">
      <h1 className="home--h1">What would you like to learn about today? </h1>
      <div className="homePage--box">
        {props.Languages.map((language, index) => (
          <div
            className="card card-circle"
            style={{ backgroundColor: language.color }}
          >
            <div className="card-body">
              <h5 className="card-title">{language.language}</h5>
              <Link
                to={`/${language.homePath}`}
                className="btn btn-primary btn--link"
              >
                See more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
