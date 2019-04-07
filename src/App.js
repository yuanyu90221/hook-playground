import React, { useState , useEffect } from 'react';

function App() {
  const userText = useKeyPress('Hello here...');
  return (
    <div>
      <h1>Feel free to type!Your text will show up below </h1>
      <blockquote>
        {userText}
      </blockquote>
    </div>
  )
}

function useKeyPress(staringValue) {
  const [userText, setUserText] = useState(staringValue);
  const handleUserKeyPress = (event)=>{
    const { key, keyCode } = event;
    // lowercase alphabet
    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)){
      setUserText(`${userText}${key}`);
    }
  };

  useEffect(()=>{
    window.addEventListener('keydown', handleUserKeyPress);
    return ()=> {
      window.removeEventListener('keydown', handleUserKeyPress);
    }
  });

  return userText;
}

export default App;
