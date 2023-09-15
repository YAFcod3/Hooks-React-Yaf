import React, { useReducer } from 'react'






const reducer = (state,action)=>{
  switch(action.type){
    case "INCREMENT":
      return { count :state.count +1 , showText:state.showText}
    case "toggleShowText":
      return { count :state.count , showText:!state.showText}
    default:
      return state  

  }

}





function ReducerTutorial() {

  // const [count,setCount]=useState(0)
  // const [showText,setShowText]=useState(true)

  //multiples estados ,mejor manejarlo con reducers
  const [state,dispatch]=useReducer(reducer, { count:0,showText:true})



 


  return (
   <div> 
    <h1>Reducers</h1>
    <h2>{state.count  }</h2>
    <button
     onClick=  {  ()=>{ 
      dispatch({type:"INCREMENT"})
      dispatch({type:"toggleShowText"})
       }}
       >Click Aqui
        </button>

        {state.showText && <p>Este es un texto</p>}

<hr />
   </div>
  )
}

export default ReducerTutorial