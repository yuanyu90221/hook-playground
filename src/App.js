import React, { useState, useEffect } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = ()=> setCount(count + 1);
  const handleDecrease = ()=> setCount(count - 1);
  useEffect(()=>{
    console.log(`I'm inside the useEffect function. The current count is ${count}`);
    
    return () => {
      console.log(`I'm removing anything that was setup above!, The last count was ${count}`);
    };
  });
  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <h1>{count}</h1>
    </div>
  )
}
function App() {
  const [visible, setVisible] = useState(false);
  const handleShowHide = ()=>setVisible(!visible);
  return (
    <div>
      <button onClick={handleShowHide}>
        Show / Hide the Counter Component
      </button>
      {visible&&<Counter/>}
    </div>
  )
}

export default App;
