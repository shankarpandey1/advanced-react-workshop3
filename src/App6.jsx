import React, { useState } from "react";
import BusinessCardList from "./BusinessCardListFull6";
import initialBizcards from "./Data";
import "./style.css";

function App() {
  const [bizcards, setBizcards] = useState(initialBizcards);

  const handleUpdateBizcards = (updatedBizcards) => {
    setBizcards(updatedBizcards);
  };

  return (
    <div className="App">
      <h2>Business Cards</h2>
      <BusinessCardList
        bizcards={bizcards}
        onUpdateBizcards={handleUpdateBizcards}
      />
    </div>
  );
}

export default App;
