import React, { useState } from "react";
import BusinessCardList from "./BusinessCardList";
import bizcards from "./Data";
import "./style.css";

function App() {
  const [filter, setFilter] = useState(null);

  const filteredCards = bizcards.filter((card) => {
    if (!filter) return true;
    if (filter === "A-M" && card.name[0].toUpperCase() <= "M") return true;
    if (filter === "N-Z" && card.name[0].toUpperCase() >= "N") return true;
    return false;
  });

  return (
    <div className="App">
      <h2>Business Cards</h2>
      <button onClick={() => setFilter("A-M")}>A-M</button>
      <button onClick={() => setFilter("N-Z")}>N-Z</button>
      <button onClick={() => setFilter(null)}>All</button>
      <BusinessCardList bizcards={filteredCards} />
    </div>
  );
}

export default App;
