import React, { useState } from 'react';

function useCounter(initalValue) {
  const [ count, setCount ] = useState(initalValue);
  const handleIncrease = () => setCount(count+1);
  const handleDecrease = () => setCount(count-1);
  const handleReset = () => setCount(initalValue);
  return {count, handleIncrease, handleDecrease, handleReset};
}
function Display(props) {
  const {count, handleIncrease, handleDecrease, handleReset} = useCounter(props.start);
  return (
    <div>
      <button onClick={handleIncrease}>
        Increase    
      </button>
      <button onClick={handleDecrease}>
        Decrease    
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
      <h1>{count}</h1>
    </div>
  )
}

function FancyDisplay(props) {
  const {count, handleIncrease, handleDecrease, handleReset} = useCounter(props.start);
  return (
    <section>
      <button onClick={handleIncrease}>
        Increase    
      </button>
      <button onClick={handleDecrease}>
        Decrease    
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
      <h2>{count}</h2>
    </section>
  )
}
function App() {
  
  return (
    <div>
      <Display start={10}/>
      <Display start={2}/>
      <FancyDisplay start={0}/>
    </div>
  )
}

export default App;
