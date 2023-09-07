import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./endModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
export default function YouHaveLost(props) {
  const toggleModal = () => {
    console.log("I am being fucking clicked");
  };

  return (
    <>
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <div className="you-have-lost">
          <h2>
            You Have Lost!{" "}
            <FontAwesomeIcon icon={faHeartCrack} style={{ color: "red" }} />
          </h2>
          <p className="my-4">
            Oops! You ran out of hearts. You got a score of{" "}
            <span className="currentScore--modal"> {props.currentScore}. </span>{" "}
            Try again and get a new high score!{" "}
          </p>
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
