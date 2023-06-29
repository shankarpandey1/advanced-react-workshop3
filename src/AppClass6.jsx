import React from "react";
//import BusinessCardList from "./BusinessCardList";
//import BusinessCardList from "./BusinessCardListCh2";
import BusinessCardList from "./BusinessCardListFull6"; // ./BusinessCardListFull" import BusinessCardList from "./BusinessCardList
import businessCards from "./Data";
import "./style.css";

function App() {
  const [bizcards, setBizcards] = useState(businessCards);

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
