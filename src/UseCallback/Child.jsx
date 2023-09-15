import React, { useEffect } from "react";

function Child({ returnComment }) {




  useEffect(() => {

    console.log("FUNCTION WAS CALLED");

  }, [returnComment]);







  return <div>{returnComment("YAFcod3")}</div>;
}





export default Child;
