import React from "react";
import Tweet from "./Tweet";

function App() {
  return (
    <div className="app">
      <Tweet name="Bob" message="Hi, how is everyone doing!?" likes="7" />
      <Tweet name="Timmy" message="I can't wait for dinner!" likes="466" />
      <Tweet name="Jessica" message="hellow world" likes="26" />
    </div>
  );
}

export default App;
