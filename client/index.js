import React from "react";
import { render } from "react-dom";

function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}

render(<App />, document.getElementById("root"));
