import React, { useState } from "react";
import BusinessCard from "./BusinessCard";
import BusinessCardDetail from "./BusinessCardDetail";

function BusinessCardList(props) {
  const { bizcards } = props;
  const [selectedCard, setSelectedCard] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);

  const filteredBizcards = showFavorites
    ? bizcards.filter((card) => card.favorite)
    : bizcards;

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
      <label>
        <input
          type="checkbox"
          checked={showFavorites}
          onChange={() => setShowFavorites(!showFavorites)}
        />{" "}
        Show favorites only
      </label>
      {filteredBizcards.map((card, index) => (
        <div onClick={() => setSelectedCard(index)} key={index}>
          <BusinessCard
            name={card.name}
            position={card.position}
            email={card.email}
            tel={card.phone}
            photo={card.photo}
            favorite={card.favorite}
          />
        </div>
      ))}
    </div>
  );
}

export default BusinessCardList;
