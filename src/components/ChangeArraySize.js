import React, { useState } from "react";
import { ArraySizeContext } from "../Context/ArraySizeContext";
import GenerateArray from "./GenerateArray";

export default function ChangeArraySize() {

  const [value, setValue] = useState(5);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log("changeArraySize" + value);
  };

  return (
    <div>
      {/* <div id="generate-array">
        <GenerateArray value = {value}/>
      </div> */}
      <ArraySizeContext.Provider value={value}>
        <div id="toolbar">
          <input
            type="range"
            min="5"
            max="31"
            defaultValue={value}
            onChange={handleChange}
          />
        </div>
        <div></div>
        <div id="generate-array">
          <GenerateArray/>
        </div>
      </ArraySizeContext.Provider>
    </div>
  );
}
