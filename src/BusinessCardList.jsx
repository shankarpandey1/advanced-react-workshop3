// BusinessCardList Mod 5 Challenge 1
import React, { useState } from "react";
import BusinessCard from "./BusinessCard";
import BusinessCardDetail from "./BusinessCardDetail";

function BusinessCardList(props) {
  const { bizcards } = props;
  const [selectedCard, setSelectedCard] = useState(null);

  if (selectedCard !== null) {
    const card = bizcards[selectedCard];
    return (
      <BusinessCardDetail
        name={card.name}
        position={card.position}
        email={card.email}
        tel={card.phone}
        photo={card.photo}
        onBack={() => setSelectedCard(null)}
      />
    );
  }

  return (
    <div className="cards">
      {bizcards.map((card, index) => (
        <div onClick={() => setSelectedCard(index)} key={index}>
          <BusinessCard
            name={card.name}
            position={card.position}
            email={card.email}
            tel={card.phone}
            photo={card.photo}
          />
        </div>
      ))}
    </div>
  );
}

export default BusinessCardList;
