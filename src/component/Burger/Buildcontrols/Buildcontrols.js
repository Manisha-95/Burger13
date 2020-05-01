import React from "react";

import "./Buildcontrols.css";
import Buildcontrol from "../Buildcontrol/Buildcontrol";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const Buildcontrols = () => (
  <div className="Buildcontrols">
    {controls.map(ctrl => (
      <Buildcontrol key={ctrl.label} label={ctrl.label} />
    ))}
  </div>
);
export default Buildcontrols;
