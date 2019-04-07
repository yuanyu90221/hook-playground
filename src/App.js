import React, { useState, useEffect, useContext, createContext } from 'react';

const NameContext = createContext();
function App() {
  const [name, setName] = useState('Billy Shapespeare');

  return (<div>
    <NameContext.Provider value={name}>
      <Child />
    </NameContext.Provider>
  </div>);
}

function Child() {
  return (
    <section className="child">
      <GrandChild/>
    </section>
  )
}

function GrandChild() {
  return (
    <div class="grandChild">
      <Button/>
    </div>
  )
}
function Button() {
  const name = useContext(NameContext);
  return (
    <button>{name}</button>
  )
}

export default App;
