import React, { useState } from "react";
import { SortingContext } from "../Context/SortingContext";
import ChangeArraySize from "./ChangeArraySize";
import colorSortAlgoMap from './colorSortAlgoMap'

export default function SortingAlgorithim() {
  
  const [sortAlgos, setSortAlgos] = useState([
    "Merge Sort",
    "Quick Sort",
    "Bubble Sort",
  ]);

  

  const [flag, setFlag] = useState(false);
  const [sortTypes, setSortTypes] = useState(true);
  const [selectedSortAlgo, setSelectedSortAlgo] = useState("Bubble Sort");

  const handleClick = (e) => {
    setSelectedSortAlgo(sortAlgos[e]);
    setFlag(true);
  };

  const handleClickFn = (e) => {
    console.log("selected", selectedSortAlgo);
  };

  return (
    <SortingContext.Provider value={{selectedSortAlgo, colorSortAlgoMap}}>
      <div>
        {sortTypes && (
          <div id="sorting-container">
            {sortAlgos.map((sortAlgo, index) => (
              <div key={index} id="sort">
                <button
                  onClick={() => {
                    handleClick(index);
                  }}
                >
                  {sortAlgo}
                </button>{" "}
                {/*** not every time it will be call unless click it won't fire the fn i.e anonymous fn */}
              </div>
            ))}
            {flag && (
              <div
                disabled={true}
                onClick={() => {
                  handleClickFn();
                }}
              >
                Sort !
              </div>
            )}
          </div>
        )}     

      </div>
      <ChangeArraySize/>     
    </SortingContext.Provider>
  );
}
