import React, { useState, useEffect, useContext } from "react";
import { ArraySizeContext } from "../Context/ArraySizeContext";
import { SortingContext } from "../Context/SortingContext";
import Modal from "./Modal";

const GenerateArray = () => {
  const value = useContext(ArraySizeContext);
  const [end, setEnd] = useState(value);
  const [start, setStart] = useState(1);
  const [flag, setFlag] = useState(false);
  const [items, setItems] = useState([end]);
  const [colors, setColors] = useState(Array(setItems.length).fill("purple"));
  const [disabled, setDisabled] = useState(false);
  const [enableSortBtn, setEnableSortBtn] = useState(false);
  const [showModalFlag, setShowModalFlag] = useState(false);

  const { selectedSortAlgo, colorSortAlgoMap } = useContext(SortingContext);

  useEffect(() => {
    console.log(selectedSortAlgo, colorSortAlgoMap);
    if (selectedSortAlgo) {
      console.log("Selected Sort Algorithm: ", selectedSortAlgo);
    }
  }, [selectedSortAlgo]);

  useEffect(() => {
    // Similar component componentDidMount we need when scroll bar updated
    console.log("useEffect" + value);
    setEnd(value);
  }, [value]);

  const resetSize = () => {
    console.log("resetSize");
    setItems([]);
    setStart(1);
    if (selectedSortAlgo) {
      setEnableSortBtn(true);
    }
  };

  const setAllStatus = () => {
    let newColors = [...colors];
    console.log(colorSortAlgoMap.get(selectedSortAlgo));
    setColors(newColors);
    setEnableSortBtn(false);
    setShowModalFlag(false);
  };

  const bubbleSort = async (e) => {
    for (var k = 0; k < items.length; k++) {
      for (var l = 0; l < items.length - 1 - k; l++) {
        console.log("bubble Sort");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (items[l] > items[l + 1]) {
          var val = items[l + 1];
          items[l + 1] = items[l];
          items[l] = val;
          let newColors = [...colors];
          newColors[l] = "red";
          newColors[l + 1] = "red";
          setColors(newColors);
        }
      }
    }

    setAllStatus();
  };
  /**
  handleSorting ()
  {
       for(let i =0;i<items.length;i++)
       {
         await new Promise(resolve => setTimeout(resolve, 1000));  // await new Promise
         console.log(`Item at index  is ${items[i]}`, 'hello'); 
         let newColors = [...colors];
        newColors[i] = "red";
        setColors(newColors);
       }
  } */

  const handleSorting = (e) => {
    console.log("handleSort" + selectedSortAlgo);
    if (selectedSortAlgo === "Bubble Sort") {
      setDisabled(true);
      setEnableSortBtn(true);
      bubbleSort();
      setTimeout(() => {
        setShowModalFlag(true);
      }, 2000);
      setShowModalFlag(false);
      console.log(showModalFlag);
    } else if (selectedSortAlgo === "Merge Sort") {
      let low = 0;
      let high = items.length - 1;
      mergeSort(items, low, high);
      setTimeout(() => {
        setShowModalFlag(true);
      }, 2000);
      setShowModalFlag(false);
      console.log(showModalFlag);
    } else if (selectedSortAlgo === "Quick Sort") {
      
    }
  };

  const mergeSort = async (items, low, high) => {
    let newColors = [...colors];
    if (low < high) {
      let middle = Math.floor((low + high) / 2);
      newColors[low] = "green";
      newColors[middle] = "green";
      mergeSort(items, low, middle);
      //

      mergeSort(items, middle + 1, high);
      newColors[middle + 1] = "green";
      newColors[high] = "green";

      merge(items, low, middle, high);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // await new Promise
      setAllStatus();
    }
  };

  const merge = (items, low, middle, high) => {
    let left = items.slice(low, middle + 1);
    let right = items.slice(middle + 1, high + 1);
    let i = 0;
    let j = 0;
    let k = low;
    let newColors = [...colors];

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        items[k] = left[i];
        newColors[k] = "green";

        i++;
        newColors[i] = "red";
        setColors(newColors);
      } else {
        items[k] = right[j];
        newColors[k] = "green";
        j++;
        newColors[j] = "green";
        setColors(newColors);
      }
      k++;
    }
    while (i < left.length) {
      items[k] = left[i];
      i++;
      k++;
    }
    while (j < right.length) {
      items[k] = right[j];

      j++;
      newColors[j] = "green";
      k++;
      newColors[k] = "green";
      setColors(newColors);
    }
  };

  const handleClick = (e) => {
    let newColors = Array(items.length).fill("purple");
    setColors(newColors);
    resetSize();
    console.log(end);
    for (var i = 0; i < end; i++) {
      setItems((prevItems) => [
        ...prevItems,
        Math.floor(Math.random() * (end - start + 1) + start),
      ]);
    }
    console.log(items);
    setFlag(true);
    setShowModalFlag(false);
  };

  return (
    <div>
      <div id="container">
        <button id="generate_random_arr" onClick={handleClick}>
          GenerateArray
        </button>
        {enableSortBtn && (
          <button id="generate_random_arr" onClick={handleSorting}>
            {selectedSortAlgo + "" + "!"}
          </button>
        )}
        <div>
          {showModalFlag && (
            <Modal flag={showModalFlag} sortAlgoType={selectedSortAlgo} />
          )}
        </div>
      </div>

      <div id="seperate-container">
        {flag && (
          <div className="chart">
            {items.map((item, index) => (
              <div
                id="bar"
                style={{
                  height: `${item * 2}vh`,
                  width: "100px",
                  backgroundColor: colors[index],
                }}
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateArray;
