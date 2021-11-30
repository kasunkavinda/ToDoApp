import React, { useState } from "react";
import Header from "./components/Header/Header";
import ToDoItems from "./components/ToDoItems/ToDoItems";
import Footer from "./components/Footer/Footer";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, text: "To do item 1" },
    { id: 2, checked: true, text: "To do item 2" },
    { id: 3, checked: false, text: "To do item 3" },
  ]);

  const handleOnChange = (checkedId) => {
    const listItems = items.map((item) =>
      item.id === checkedId ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const trashClick = (trashId) => {
    const listItems = items.filter((item) => item.id !== trashId);
    setItems(listItems);
  };
  return (
    <div>
      <Header />

      <ToDoItems
        items={items}
        handleOnChange={handleOnChange}
        trashClick={trashClick}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
