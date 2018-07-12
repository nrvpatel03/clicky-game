import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
      <img alt={props.name} src={props.image} />
  </div>
);

export default FriendCard;
