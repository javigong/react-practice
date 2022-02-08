import "./style.css";
import React from "react";
import { useState } from "react";

const TypeChooser = (props) => {
  const [types, setTypes] = useState([
    "recreational",
    "education",
    "social",
    "busywork",
    "charity",
    "cooking",
    "relaxation",
    "diy",
  ]);

  let bgColor = {
    backgroundColor: "aliceblue",
  };

  return (
    <div className="types">
      <h2>Types of activities:</h2>
      <ul>
        {types.map((type) => (
          <li key={type} style={type == props.chosenActivity ? bgColor : {}}>
            <a href="#" onClick={(event) => props.handleChosenActivity(event, type)}>
              {type}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TypeChooser;
