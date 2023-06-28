import React from "react";
import "./style.css";

function BusinessCard(props) {
  const { name, position, email, tel, photo, favorite } = props;
  return (
    <div className="card">
      <img src={photo} alt="Avatar" />
      <div className="container">
        <h4>
          <b>{name}</b> {favorite && "★"}
        </h4>
        <p>{position}</p>
        <p>{email}</p>
        <p>{tel}</p>
      </div>
    </div>
  );
}

export default BusinessCard;
