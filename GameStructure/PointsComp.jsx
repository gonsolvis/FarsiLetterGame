import "./gameStructure.css";
import "bootstrap/dist/css/bootstrap.css";
import HeartsComp from "./HeartsComp";
import Countdown from "./Countdown";

function PointsComp(props) {
  return (
    <div className="pointsComp">
      <div id="countdown" className="">
        <Countdown countdown={props.countdown} />
      </div>

      <div className="heartsComp">
        <HeartsComp heartsLeft={props.heartsLeft} />
      </div>
      <div id="score" className="">
        <h5 id="currentScoreTitle">Current Score : {props.currentScore} </h5>
      </div>
    </div>
  );
}

export default PointsComp;
