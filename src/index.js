// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

//Destructuring the cars array
const [honda, tesla] = cars;
const {topSpeed : hondaTopSpeed} = honda.speedStats;
const {topSpeed : teslaTopSpeed} = tesla.speedStats;
const hondaTopColour = honda.coloursByPopularity[0];
const teslaTopColour = tesla.coloursByPopularity[0];

// console.log(cars[0].model);

console.log(tesla);

ReactDOM.render(
  <table>
    <tbody>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
    </tbody>
  </table>,
  document.getElementById("root")
);
