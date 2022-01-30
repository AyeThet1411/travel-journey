import React from "react";
import img from "../images/Fuji.jpg";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card--img" />
      <div className="card--text--box">
        <div className="card--location">
          <i className="fas fa-map-marker-alt"></i>
          <p>{props.location}</p>
          <a href={props.mapLink}>{props.mapLink}</a>
        </div>
        <h3 className="card--title">{props.title}</h3>
        <div className="card--date">
          <strong>
            {props.startDate}-{props.endDate}
          </strong>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
