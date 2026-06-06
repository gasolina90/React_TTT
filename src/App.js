import { useState } from "react";

function Square({value}) {
  const [value, setValue] = useState(null)

  function handleClick() {
    setValue("X")
  }

  return (
    <buton
    className="square"
    onClick={handleClick}
    >
      {value}
    </buton>
  );
}

export default function board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
