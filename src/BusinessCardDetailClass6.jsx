import React, { useState } from "react";
import "./style.css";

function BusinessCardDetail(props) {
  const {
    name,
    position,
    email,
    tel,
    photo,
    onBack,
    onToggleFavorite,
    favorite,
    onUpdateContact,
  } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedPosition, setEditedPosition] = useState(position);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedTel, setEditedTel] = useState(tel);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedName(name);
    setEditedPosition(position);
    setEditedEmail(email);
    setEditedTel(tel);
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdateContact({
      name: editedName,
      position: editedPosition,
      email: editedEmail,
      tel: editedTel,
    });
  };

  return (
    <div className="card-detail">
      <button onClick={onBack}>Back</button>
      <button onClick={onToggleFavorite}>{favorite ? "★" : "☆"}</button>
      {isEditing ? (
        <>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <img src={photo} alt="Avatar" />
      <div className="container">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <input
              type="text"
              value={editedPosition}
              onChange={(e) => setEditedPosition(e.target.value)}
            />
            <input
              type="text"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
            <input
              type="text"
              value={editedTel}
              onChange={(e) => setEditedTel(e.target.value)}
            />
          </>
        ) : (
          <>
            <h4>
              <b>{name}</b>
            </h4>
            <p>{position}</p>
            <p>{email}</p>
            <p>{tel}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default BusinessCardDetail;
