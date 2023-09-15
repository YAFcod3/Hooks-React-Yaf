import React, { useState } from 'react'

function StateTutorial() {




  
  //1
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(() => counter + 1);
  };

  //2
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };


  

  return (
    <>
    <h1>State</h1>
      <div>
        {counter} <button onClick={increment}>Incrementar</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="escribe algo..."
          onChange={handleChange}
        />
        {inputValue}
      </div>
    </>
  );
}

export default StateTutorial