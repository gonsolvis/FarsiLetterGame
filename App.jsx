import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./navbar&footer/NavBar";
import Footer from "./navbar&footer/Footer";
import Home from "./Home";
import GameStructure from "./GameStructure/GameStructure";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import AboutPage from "../AboutPage";
import LanguageHomePage from "./LanguagesHomePages/LanguageHomePage";
import Languages from "./dataLists/LanguagesHomePageList/Languages";
import LanguagesLists from "./dataLists/LettersLists/LettersLists";
import LanguagesShapes from "./dataLists/LettersLists/LettersListsShapes";
import LettersTable from "./LettersHelp/LettersTable";
import SignupPage from "./UserPages/SignupPage";
import LoginPage from "./UserPages//LoginPage";
import GamesLists from "./gamesList/GamesLists";
import NumbersLists from "./dataLists/LettersLists/NumbersLists";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <div className="outsideApp">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home Languages={Languages} />} />

          {Languages.map((language, index) => (
            <Route
              key={index}
              path={`/${language.homePath}`}
              element={
                <LanguageHomePage
                  language={language.language}
                  mainTitle={language.mainTitle}
                  color={language.color}
                  cardTitle={language.cardTitle}
                  longDescription={language.longDescription}
                  smallDescription={language.smallDescription}
                  gameLink={language.gameLink}
                  lettersTable={language.lettersTable}
                  resources={language.resources}
                  gamesLists={language.gamesLists}
                />
              }
            />
          ))}

          {LanguagesLists.map((language, index) => (
            <Route
              key={index}
              path={`/${language.gameLink}`}
              element={
                <GameStructure
                  cards={language.LettersObject}
                  lettersTable={language.lettersTable}
                />
              }
            />
          ))}

          {LanguagesShapes.map((language, index) => (
            <Route
              key={index}
              path={`/${language.lettersTable}`}
              element={
                <LettersTable
                  letters={language.LettersObject}
                  mainTitle={language.mainTitle}
                  color={language.color}
                  cardTitle={language.cardTitle}
                  longDescription={language.longDescription}
                  smallDescription={language.smallDescription}
                />
              }
            />
          ))}

          {NumbersLists.map((language, index) => {
            console.log("numbers language", language.NumbersObject);
            return (
              <Route
                key={index}
                path={`/${language.numbersGamePath}`}
                element={<GameStructure cards={language.NumbersObject} />}
              />
            );
          })}
          <Route path="/games_lists" element={<GamesLists />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/about_page" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
