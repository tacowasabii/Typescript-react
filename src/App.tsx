import React from "react";
import { useState } from "react";
import Item from "./models/item";
import ShoppingList from "./components/ShoppongList";
import ShoppingListForm from "./components/ShoppingListForm";
import { v4 as getId } from "uuid";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    console.log("MADE TO THE APP COMPONENT!");
    setItems([...items, { id: getId(), product, quantity }]);
  };
  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
