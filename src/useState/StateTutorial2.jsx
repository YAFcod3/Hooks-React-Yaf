


import React, { useState } from 'react'

function StateTutorial2() {

  const [count,setCount]=useState(0)
  const [showText,setShowText]=useState(true)

  //multiples estados ,mejor manejarlo con reducers


 


  return (
   <div> 
    <h1>{count  }</h1>
    <button
     onClick=  {  ()=>{ 
       setCount(count + 1); 
       setShowText(!showText); 
       }}
       >Click Aqui
        </button>

        {showText && <p>Este es un texto</p>}

<hr/>
   </div>
  )
}

export default StateTutorial2