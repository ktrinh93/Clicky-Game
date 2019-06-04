import React from "react";
import "./style.css";

export function Card(props) {
  return (
    <img className="card-img-top" id={props.id} src={props.src} onClick={props.onClick} alt="technology" />
  )
}