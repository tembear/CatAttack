import React from "react";
import "./card-list.style.css";

import { Card } from "../card-component/card-component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <Card monster={monster} key={monster.id}></Card>;
      })}
    </div>
  );
};
