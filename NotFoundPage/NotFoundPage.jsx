/*  eslint-disable*/
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div id="nofoundBackground">
      <div class="card" id="languageHomePage--cardbox">
        <div class="card-header" id="notFoundPage--cardtitle">
          <h1>Page Not Found</h1>
        </div>
        <div class="card-body">
          <h5 class="card-title my-3" id="notFoundPage--h5title">
            Woooh there partner, where are you going?
          </h5>
          <p class="card-text w-75 my-4" id="IntroLongText">
            You have found a page still under construction or there is a mistake
            on our part! We are only human.
            <Link to="/" className="mx-2">
              Return home
            </Link>
            <p className="my-2">
              Please contact us if you need further information at
              <a href="mailto:scriptlitassistance@gmail.com" className="mx-2">
                scriptlitassistance@gmail.com
              </a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
