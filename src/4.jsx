import React from "react";
import useInput from "./useInput";

const StageFour = () => {
  const [value, handleChange] = useInput("");
  return (
    <div>
      <h1>Debounce</h1>
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export default StageFour;
