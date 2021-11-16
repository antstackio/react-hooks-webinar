import React from "react";
import useInput from "./useInput";

const StageFour = () => {
  const [value, handleChange] = useInput("");
  return (
    <div className="">
      <input value={value} onChange={handleChange}></input>
    </div>
  );
};

export default StageFour;
