import React, { useState } from "react";

function TodoList({ render }) {
  const [items, setItems] = useState([]);

  function addItem(e) {
    e.preventDefault();
    const newItem = e.target.elements.newItem.value.trim();
    if (newItem !== "") {
      setItems([...items, newItem]);
      e.target.reset();
    }
  }

  function removeItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" name="newItem" />
        <button type="submit">Add Item</button>
      </form>
      {render(items, removeItem)}
    </div>
  );
}

export default TodoList;