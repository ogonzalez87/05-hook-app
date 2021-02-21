import React, { useRef } from "react";
import "../02-useEffect/effects.css";
export const FocusScreen = () => {
  const inputRef = useRef();

//   console.log(ref);

  const handleClick = () => {
    // document.querySelector("input").select();
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input className="form-control" placeholder="Su Nombre" ref= {inputRef} />

      <button className="btn btn-outline-primary  mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
