import React from "react";
import Counter from "./components/Counter";
import img from "./img.jpg";

const App = () => {
  return (
    <div>
      <Counter />
      <img src={img} width="250" />
    </div>
  );
};

export default App;
