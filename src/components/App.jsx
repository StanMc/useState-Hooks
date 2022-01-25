import React from "react";

function App() {
  /* 
          S   T   A   N

          On Tuesday just resume the the video.
          You left off on "destructing" introduction.
          This has to do w/ dealing with the strange
          syntax of state.[0]

          BTW, the code currently runs. 

*/

  //const state = React.useState(323);
  const [count, setCount] = React.useState(0);
  console.log("count: " + count);

  ////////////////////////////////////////////////////
  // const rgb = [9,32,227];  ...then deconstruct into
  const [red, green, blue] = [9, 32, 227];
  console.log("red = " + red);
  /////////////////////////////////////////////////////

  function decrease() {
    console.log("decrease():");
    setCount(count - 1);
  }

  function increase() {
    console.log("increase():");
    //count++;
    //console.log("count = " + count);
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
