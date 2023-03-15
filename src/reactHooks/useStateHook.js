import React, { useState } from "react";

const FirstHook = () => {
  let startVal = 0;
  let [value, setNewValue] = useState(startVal);

  let AddNewValue = () => {
    return setNewValue(value + 1);
  };
  let SubValue = () => {
    return setNewValue(value - 1);
  };

  if (value < 0) {
    return setNewValue(0);
  }

  return (
    <>
      <div className="first-outer">
        <div className="first-inner">
          <div className="show-first-data">{value}</div>
          <div className="first-btn-box">
            <button className="first-add-btn hoverEffect" onClick={AddNewValue}>
              <i className="fa-solid fa-plus"></i>
            </button>
            <button className="first-sub-btn hoverEffect" onClick={SubValue}>
              <i className="fa-solid fa-minus"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstHook;
