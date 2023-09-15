import React, { useRef } from "react";
import Button from "./Boton";

function ImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
      <hr />
    </div>
  );
}

export default ImperativeHandle;
