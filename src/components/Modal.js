import React, { useState } from 'react';

function Modal({sortAlgoType}) {

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  const timeComplexityMap = new Map([
    ["Merge Sort", "O(n log n)"],
    ["Quick Sort", "blue"],
    ["Bubble Sort", "O(n^2)"]
]);

const spaceComplexityMap = new Map([
  ["Merge Sort", "O(n)"],
  ["Quick Sort", "blue"],
  ["Bubble Sort", "O(n)"]
]);

const ideaMap = new Map([
  ["Merge Sort", "Divide and conquer Algorthim technique call recursively divide and sort"],
  ["Quick Sort", "blue"],
  ["Bubble Sort", "Take larger element to the end by repeatedly swapping the adjacent elements"]
]);

const timeComplexity = timeComplexityMap.get(sortAlgoType);
console.log(timeComplexity); // "o(n^2)"

const spaceComplexity = spaceComplexityMap.get(sortAlgoType);
console.log(spaceComplexity);


  
  console.log(sortAlgoType)
  return (
    <>
      <button id="generate_random_arr" onClick={handleShow}>Show Modal</button>
      {showModal && (
        <div  className="modal-container">
        <div className="modal-content">
          <div>Time Complexity for {sortAlgoType} : {timeComplexity}</div>
          <div> Space Complexity for {sortAlgoType} : {spaceComplexity}</div>
          <div> Idea for {sortAlgoType} : {ideaMap.get(sortAlgoType)} </div>
          <button id="generate_random_arr" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;