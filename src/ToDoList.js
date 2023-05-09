import React, { useState } from "react";

function TodoList() {
  const [items, setItems] = useState([]);

  function addItem(e) {
    e.preventDefault();
    const newItem = e.target.elements.newItem.value.trim();
    if (newItem !== "") {
      setItems([...items, newItem]);
      e.target.reset();
    }
  }
  function resetItems() {
    setItems([]);
  }

  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" name="newItem" />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={resetItems}>Reset</button>
    </div>
  );
}

export default TodoList;