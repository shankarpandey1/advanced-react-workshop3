import React, { useState } from "react";
import BusinessCard from "./BusinessCard";
import BusinessCardDetail from "./BusinessCardDetailClass6";

function BusinessCardList(props) {
  const { bizcards } = props;
  const [selectedCard, setSelectedCard] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredBizcards = bizcards
    .filter((card) => !showFavorites || card.favorite)
    .filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  const handleUpdateContact = (updatedContact) => {
    const updatedBizcards = [...bizcards];
    updatedBizcards[selectedCard] = {
      ...updatedBizcards[selectedCard],
      ...updatedContact,
    };
    props.onUpdateBizcards(updatedBizcards);
  };

  if (selectedCard !== null) {
    const card = filteredBizcards[selectedCard];
    return (
      <BusinessCardDetail
        name={card.name}
        position={card.position}
        email={card.email}
        tel={card.phone}
        photo={card.photo}
        favorite={card.favorite}
        onBack={() => setSelectedCard(null)}
        onToggleFavorite={() => {
          card.favorite = !card.favorite;
          setSelectedCard(null);
        }}
        onUpdateContact={handleUpdateContact}
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
      <br />
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <br />
      Sort by name:{" "}
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
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
