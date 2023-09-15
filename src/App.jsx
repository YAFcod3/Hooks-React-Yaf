import CallbackTutorial from "./UseCallback/CallbackTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import LayoutEffectTutorial from "./UseLayoutEffect.jsx/LayoutEffectTutorial";
import MemoTutorials from "./UseMemo/MemoTutorials";
import ReducerTutorial from "./useReducer/ReducerTutorial";
import RefTutorial from "./UseRef/RefTutorial";
import StateTutorial from "./useState/StateTutorial";
import StateTutorial2 from "./useState/StateTutorial2";

function App() {
  



  return (
  
      <div>

        <StateTutorial/>
        <StateTutorial2/>

        <ReducerTutorial/>
        <EffectTutorial/>
        <RefTutorial/>
        <LayoutEffectTutorial/>
        <ImperativeHandle/>
        <ContextTutorial/>
        <MemoTutorials/>
        <CallbackTutorial/>
       
      </div>
     
      
  );
}

export default App;
