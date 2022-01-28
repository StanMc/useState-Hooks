import React from "react";

function App() {
  //const state = React.useState(323);
  const [count, setCount] = React.useState(0);
  console.log("count: " + count);

  /*  <EXPERIMENT> */
  const [state, setState] = React.useState(99);
  console.log("state=" + state);
  /*  </EXERIMENT> */

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
