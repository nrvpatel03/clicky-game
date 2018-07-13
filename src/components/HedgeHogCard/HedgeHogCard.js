import React from "react";
import "./HedgeHogCard.css";

const HedgeHogCard = props => (
  <div className="card">
      <img id={props.id} value={props.value} onClick={props.clickFunc} alt={props.name} src={props.image} />
  </div>
);

export default HedgeHogCard;
