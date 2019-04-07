import React, { useState, useEffect } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('salmon');
  const handleIncrease = ()=> setCount(count + 1);
  const handleDecrease = ()=> setCount(count - 1);
  const handleColorChange = ()=> {
    const nextColor = color === 'salmon' ? 'gold': 'salmon';
    setColor(nextColor);
  }
  useEffect(()=>{
    console.log(`I'm inside the useEffect function.Will only run upon mounting, The current count is ${count}`);
    
    return () => {
      console.log(`I'm removing anything that was setup above!, The last count was ${count}`);
    };
  }, [color]);
  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleColorChange}>ChangeColor</button>
      <h1 style={ {color} }>{count}</h1>
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
