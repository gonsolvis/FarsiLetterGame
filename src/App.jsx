import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./NavBar";
import NavBarGame from "./PointsComp";
import Home from "./Home";
import FarsiHomePage from "./FarsiHomePage";
import GameStructure from "./GameStructure";
import ArabicHomePage from "./ArabicHomePage";
import farsiCards from "./dataLists/farsiList";
import arabicCards from "./dataLists/arabicList";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from "../Footer";
import AboutPage from "../AboutPage";

function App() {
  return (
    <div className="outsideApp">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farsi_home" element={<FarsiHomePage />} />
          <Route
            path="/farsi_game"
            element={<GameStructure cards={farsiCards} />}
          />
          <Route path="/arabic_home" element={<ArabicHomePage />} />
          <Route
            path="/arabic_game"
            element={<GameStructure cards={arabicCards} />}
          />
          <Route path="/about_page" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
