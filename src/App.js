import React from "react";
import BusinessCardList from "./BusinessCardList";
import bizcards from "./Data";
import "./style.css";

function App() {
  return (
    <div className="App">
      <h2>Business Cards</h2>
      <BusinessCardList bizcards={bizcards} />
    </div>
  );
}

export default App;
