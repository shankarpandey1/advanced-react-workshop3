import React from "react";
import "./style.css";

class BusinessCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: "",
      email: "",
      tel: "",
      photo: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      name: props.name || "Not Specified",
      position: props.position || "Not Specified",
      email: props.email || "Not Specified",
      tel: props.tel || "Not Specified",
      photo:
        props.photo ||
        "https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png",
    };
  }

  render() {
    const { name, position, email, tel, photo } = this.state;
    return (
      <div className="card">
        <img src={photo} alt="Avatar" />
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{position}</p>
          <p>{email}</p>
          <p>{tel}</p>
        </div>
      </div>
    );
  }
}

export default BusinessCard;
