import axios from "axios";
import React, { useEffect, useState } from "react";

function EffectTutorial() {

const [data,setData]=useState("")
const [counter,setCounter]=useState(0)

  useEffect(() => {


    axios
      .get("http://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        // console.log(response.data);
        setData(response.data[0].email)
        console.log('API WAS CALLED')
      });
    // }, []);
  }, [counter]);

  return (
    <div>
      <h1>Effect {data}</h1>
      <h2>{counter}</h2>
      <button onClick={()=>{setCounter(counter+1)}}>click</button>
      <hr />
    </div>
  );
}

export default EffectTutorial;
