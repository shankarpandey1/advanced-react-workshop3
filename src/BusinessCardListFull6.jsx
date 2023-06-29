import React, { useState } from "react";
import BusinessCard from "./BusinessCard";
import BusinessCardDetail from "./BusinessCardDetailFull6";

function BusinessCardList(props) {
  const [bizcards, setBizcards] = useState(props.bizcards);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Lifting up state for favorite toggle
  const handleToggleFavorite = (index) => {
    setBizcards((prevBizcards) => {
      const newBizcards = [...prevBizcards];
      newBizcards[index].favorite = !newBizcards[index].favorite;
      return newBizcards;
    });
    setSelectedCard(null);
  };

  // Lifting up state for editing contact info
  const handleEditContactInfo = (index, name, position, email, tel) => {
    setBizcards((prevBizcards) => {
      const newBizcards = [...prevBizcards];
      newBizcards[index].name = name;
      newBizcards[index].position = position;
      newBizcards[index].email = email;
      newBizcards[index].tel = tel;
      return newBizcards;
    });
    setSelectedCard(null);
  };

  // Lifting up state for deleting contact
  const handleDeleteContact = (index) => {
    setBizcards((prevBizcards) => {
      const newBizcards = [...prevBizcards];
      newBizcards.splice(index, 1);
      return newBizcards;
    });
    setSelectedCard(null);
  };

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

  if (selectedCard !== null && selectedCard < filteredBizcards.length) {
    const cardIndex = bizcards.indexOf(filteredBizcards[selectedCard]);
    const card = filteredBizcards[selectedCard];

    return (
      <BusinessCardDetail
        name={card.name}
        position={card.position}
        email={card.email}
        tel={card.tel}
        photo={card.photo}
        favorite={card.favorite}
        onBack={() => setSelectedCard(null)}
        onToggleFavorite={() => handleToggleFavorite(cardIndex)}
        onEdit={(name, position, email, tel) =>
          handleEditContactInfo(cardIndex, name, position, email, tel)
        }
        onDelete={() => handleDeleteContact(cardIndex)}
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
            tel={card.tel}
            photo={card.photo}
            favorite={card.favorite}
          />
        </div>
      ))}
    </div>
  );
}

export default BusinessCardList;
