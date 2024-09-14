// App.js
import './App.css';
import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => item !== itemToRemove);
    setItems(newItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  return (
    <>
      <div className="container">
        <h1 className="main-title">Grocery List</h1>
        <div className="shopping-list">
          <h2>Items To Buy</h2>
          <form onSubmit={onSubmit} className="form">
            <input
              type="text"
              name="item"
              placeholder="Add a new item"
              required
              className="input-box"
            />
            <button className="add-button">Add</button>
          </form>
          <ul className="items-list">
            {items.map((item, index) => (
              <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function Item({ item, onRemoveItem }) {
  return (
    <li className="item">
      {item}
      <button className="delete" onClick={() => onRemoveItem(item)}>
        &times;
      </button>
    </li>
  );
}
