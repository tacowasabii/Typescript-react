import React from "react";
import ShoppingList from "./components/ShoppongList";

function App() {
  const items = [{ id: "1", product: "bag", quantity: 3 }];
  return (
    <div>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
