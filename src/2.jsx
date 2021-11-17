import React from "react";
import ToggleBox from "./scaffold/ToggleBox";
const StageTwo = () => {
  return (
    <div>
      <h1>
        Awsome! Now that you have used a pre-existing hook, lets try making our
        own
      </h1>
      <h4>Making Custom Hooks!</h4>
      <p>
        Make a <code>useToggle</code> hook!
      </p>
      <div>
        <button>Toggle theme</button>
        <ToggleBox isDark={false} />
      </div>
    </div>
  );
};

export default StageTwo;
