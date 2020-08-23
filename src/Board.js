import React, { useState, useEffect } from "react";
import pics from "./img";

function Board() {
  console.log(pics);
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [turn, setTurn] = useState(1);

  const selectCard = (e) => {
    if (turn === 1) {
      setContent1(pics[Number(e.id)].face);
      setTurn(turn + 1);
    }
    if (turn === 2) {
      setContent2(pics[Number(e.id)].face);
    }
  };

  useEffect(() => {
    if (content1 !== "" && content2 !== "") {
      if (content1 === content2) console.log("yes");
      else console.log("no");
      setContent1("");
      setContent2("");
      setTurn(1);
    }
  }, [content1, content2, turn]);

  return (
    <div className="board flip-container">
      {pics.map((pic, idx) => (
        <div
          key={idx}
          id={idx}
          className="img"
          style={{
            background: `url(${pic.src}) center / contain no-repeat`,
            width: "140px",
          }}
          onClick={(e) => selectCard(e.target)}
        ></div>
      ))}
    </div>
  );
}

export default Board;
