import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./languagesHomePage.css";

function LanguageHomePage(props) {
  return (
    <div className="homePage--languageHomePage py-5">
      <div className="card" id="languageHomePage--cardbox">
        <div className="card-header" style={{ backgroundColor: props.color }}>
          <span> {props.mainTitle} </span>
        </div>
        <div className="card-body">
          <h5 className="card-title" id="languageHomePage--h5title">
            {props.cardTitle}
          </h5>
          <p className="card-text w-100 my-2" id="IntroLongText">
            {props.longDescription}
          </p>

          <p className="card-text w-100 my-2" id="IntroShortText">
            {props.smallDescription}
          </p>
        </div>
      </div>

      <div className="homePage--box--languageHomePage ">
        <div
          className="card card-circle--languageHomePage"
          style={{ backgroundColor: props.color }}
        >
          <div className="card-body card-body--languageHomePage">
            <h5 className="card-title card-title--languageHomePage">Games</h5>
            <p className="card-text card-text--languageHomePage">
              Want to learn letters?
            </p>
            <Link
              to={`/${props.gameLink}`}
              className="btn btn-primary btn--link"
            >
              Play
            </Link>
          </div>
        </div>

        <div
          className="card card-circle--languageHomePage"
          style={{ backgroundColor: props.color }}
        >
          <div className="card-body--languageHomePage">
            <h5 className="card-title--languageHomePage">Letters</h5>
            <p className="card-text--languageHomePage">
              Need to learn the letters first?
            </p>
            <Link
              to={`/${props.lettersTable}`}
              className="btn btn-primary btn--link"
            >
              LEARN
            </Link>
          </div>
        </div>

        <div
          className="card  card-circle--languageHomePage"
          style={{ backgroundColor: props.color }}
        >
          <div className="card-body--languageHomePage">
            <h5 className="card-title--languageHomePage">Resources</h5>
            <p className="card-text--languageHomePage">
              Want free resources for learning {props.language}?
            </p>
            <Link
              to={`/${props.resources}`}
              className="btn btn-primary btn--link"
            >
              SEE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageHomePage;
