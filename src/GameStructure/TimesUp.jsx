import React, { useState } from "react";
import "./endModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function TimesUp(props) {
  const toggleModal = () => {
    console.log("I am being fucking clicked");
  };

  return (
    <>
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <div className="you-have-lost">
          <h2>
            Time's up <FontAwesomeIcon icon={faStopwatch} />
          </h2>

          {props.heartsLeft === 5 ? (
            <p className="my-4">
              <span className="currentScore--modal"> BONUS: </span>
              You got FIVE extra points for not losing any hearts. Your NEW
              score is
              <span className="currentScore--modal"> {props.currentScore}</span>
              . Try again and get a new high score!
            </p>
          ) : (
            <p className="my-4">
              {" "}
              Oops! You ran out of time. You got a score of
              <span className="currentScore--modal">
                {" "}
                {props.currentScore}.{" "}
              </span>
              Try again and get a new high score!
            </p>
          )}

          <button
            className="restart-button my-3 mx-5"
            onClick={props.restartGame}
          >
            Restart Game
          </button>
          <button className="restart-button my-3 mx-5">
            <Link to={`/${props.lettersTable}`} className="modal-button-link">
              Want to study more?
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
