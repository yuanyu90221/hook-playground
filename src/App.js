import React, { useState } from 'react';

function useGNInput(initValue) {
  const [value, setValue] = useState(initValue);
  const onChange = (event) => setValue(event.target.value);
  return {value, onChange};
}

function App() {
  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        {...useGNInput('')}
      />
      <input
        type="text"
        placeholder="SurName"
        {...useGNInput('')}
      />
      <input
        type="number"
        placeholder="Age"
        {...useGNInput(0)}
      />
    </form>
  )
}

export default App;
