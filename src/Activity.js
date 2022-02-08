import "./style.css";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Activity = (props) => {
  const [activityCopy, setActivityCopy] = useState();
  const [clickToggle, setClickToggle] = useState(false);

  useEffect(
    function loadActivity() {
      if (props.chosenActivity != undefined) {
        axios
          .get(
            `http://www.boredapi.com/api/activity?type=${props.chosenActivity}`
          )
          .then(setActivityCopy("loading..."))
          .then((result) => setActivityCopy(result.data.activity))
          .catch((error) => console.log(error));
      }
    },
    [props.chosenActivity, clickToggle]
  );

  return (
    <div>
      <h2>Activity</h2>
      <div>
        <b>Type: {props.chosenActivity}</b>
      </div>
      <p>{activityCopy}</p>
      {props.chosenActivity && (
        <button onClick={(event) => setClickToggle(!clickToggle)}>
          Get another activity
        </button>
      )}
    </div>
  );
};

export default Activity;
