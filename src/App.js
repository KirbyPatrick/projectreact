import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  let [isRed, setRed] = useState(false);
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    // '!isRed' sets the state to the opposite of what it currently is.  So if isRead = false, set it to true and vice versa
    setRed(!isRed)
  };
  let clear = () => {
    setCount((count = 0));
    setRed(isRed = false)
  };

  return (
    <div>
      <div className="app">
        <Tweet name="Bob" message="Hi, how is everyone doing!?" likes="7" />
        <Tweet name="Timmy" message="I can't wait for dinner!" likes="466" />
        <Tweet name="Jessica" message="hellow world" likes="26" />
      </div>
      <div className="app">
        {/* on below className, if isRed state == true, set className to 'red' css class.  Otherwise use 'green' css className */}
        <h1 className={isRed ? 'red' : 'green'}>Change my color</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={clear}>Clear</button>
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default App;
