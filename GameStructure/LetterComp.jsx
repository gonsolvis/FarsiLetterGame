import "./gameStructure.css";

function LetterComp({ letter, id, style }) {
  return (
    <div className="card game--card--div">
      <div className="card-body game--card--body">
        <p className="game--card--p" id="LetterGameWord">
          {letter}
        </p>
        {/* <p className="card-title">{id}</p> */}
      </div>
    </div>
  );
}

export default LetterComp;
