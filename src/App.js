import "./style.css";
import React from "react";
import { useState } from "react";
import TypeChooser from "./TypeChooser.js";
import Activity from "./Activity.js";

const App = (props) => {
  const [chosenActivity, setChosenActivity] = useState();

  const handleChosenActivity = (event, activity) => {
    setChosenActivity(activity);
  };

  return (
    <div className="app">
      <h1>Activity Suggestions</h1>
      <TypeChooser
        chosenActivity={chosenActivity}
        handleChosenActivity={handleChosenActivity}
      />
      <Activity
        chosenActivity={chosenActivity}
        handleChosenActivity={handleChosenActivity}
      />
    </div>
  );
};

export default App;
