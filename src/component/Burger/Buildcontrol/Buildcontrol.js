import React from "react";
import "./Buildcontrol.css";

const Buildcontrol = props => {
  return (
    <div className="BuildControl">
      {props.label}
      <button className="Less">Less</button>
      <button className="More">More</button>
    </div>
  );
};

export default Buildcontrol;
