import "./gameStructure.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/Ai";
import { AiOutlineHeart } from "react-icons/Ai";
import HeartsComp from "./HeartsComp";
import Countdown from "../Countdown";

function PointsComp(props) {
  return (
    <div className="pointsComp">
      <div id="score" className="">
        <h5 id="currentScoreTitle">Current Score : {props.currentScore} </h5>
      </div>

      <div className="heartsComp">
        <HeartsComp heartsLeft={props.heartsLeft} />
      </div>

      <div id="countdown" className="">
        <Countdown />
      </div>
    </div>
  );
}

export default PointsComp;
