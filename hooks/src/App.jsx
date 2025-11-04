import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  let incnum = () => {
    setNum(num + 1);
  };
  let decnum = () => {
    setNum(num - 1);
  };
  let five = () => {
    setNum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={incnum}>inc</button>
      <button onClick={decnum}>dec</button>
      <button onClick={five}>jump by five </button>
    </div>
  );
};

export default App;
