import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleIncrementClick = () => {
    setValue(value + 1);
  };

  const handleDecrementClick = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button type="button" onClick={handleIncrementClick}>
        INC
      </button>
      <button type="button" onClick={handleDecrementClick}>
        DEC
      </button>
    </div>
  );
};

export default Counter;
