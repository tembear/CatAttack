import React from "react";
import "../card-component/card-style.css";

export const Card = (props) => {
  //const { id, name } = props.monster;

  return (
    <div className="card">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set4`}
        alt="error loading kitty"
      />
      <h2>{props.monster.name}</h2>
      <h2>{props.monster.email}</h2>
    </div>
  );
};
