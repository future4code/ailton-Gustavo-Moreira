import React from "react";


export default function CardLista(props) {
  const matches = props.matches;

  return (
  
    <div>
      <img src={matches.photo} /> &nbsp;&nbsp;
      <h3>{matches.name}</h3>
    </div>
    
  );
}