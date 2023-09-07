import React, { useState } from "react";
import "./lettersTable.css";

export default function LettersTable(props) {
  console.log("letter table", props);
  return (
    <>
      <div className="tablePage">
        <div className="card--box">
          <div className="card" id="languageHomePage--cardbox">
            <div
              className="card-header"
              style={{ backgroundColor: props.color }}
            >
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
        </div>
        <div className="tableBox">
          <table>
            <thead>
              <tr>
                {/* Render table header */}
                <th style={{ backgroundColor: props.color }}> Symbol</th>
                <th style={{ backgroundColor: props.color }}>Letter</th>
                <th style={{ backgroundColor: props.color }}> Isolated Form</th>
                <th style={{ backgroundColor: props.color }}>Initial Form</th>
                <th style={{ backgroundColor: props.color }}>Medial Form</th>
                <th style={{ backgroundColor: props.color }}> Final Form</th>
              </tr>
            </thead>
            <tbody>
              {props.letters.map((row, index) => (
                <tr key={index}>
                  <td className="tableSymbols">{row.symbol}</td>
                  <td className="tableLetter">{row.letter}</td>
                  <td className="tableSymbols">{row.isolatedForm}</td>
                  <td className="tableSymbols">{row.initialForm}</td>
                  <td className="tableSymbols">{row.medialForm}</td>
                  <td className="tableSymbols">{row.finalForm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
