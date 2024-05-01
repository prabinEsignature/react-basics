import { useEffect, useState } from "react";
import "./App.css";
import groceryCartImg from "./assets/grocery-cart.png";

function App() {
  const [groceryItems, setGroceryItems] = useState([]);
  const [groceryInput, setGroceryInput] = useState("");
  const [groceryError, setGroceryError] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleChangeInputValue = (event) => setGroceryInput(event.target.value);

  const handleAddGroceryItem = () => {
    const itemIndex = groceryItems.findIndex(
      (groceryItem) =>
        groceryItem.name.toLowerCase() === groceryInput.toLowerCase()
    );

    if (itemIndex === -1) {
      setGroceryItems([
        ...groceryItems,
        { name: groceryInput, quantity: 1, completed: false },
      ]);
      setGroceryInput("");
    } else {
      setGroceryError("The item is already in the list.");
    }
  };

  const handleRemoveGroceryItem = (indexName) =>
    setGroceryItems(
      [...groceryItems].filter((groceryItem) => groceryItem.name !== indexName)
    );

  const handleQuantityChange = (indexName, change) => {
    const tempGroceryItems = groceryItems.map((groceryItem) =>
      groceryItem.name === indexName
        ? {
            ...groceryItem,
            quantity: Math.max(1, Math.min(10, groceryItem.quantity + change)),
          }
        : groceryItem
    );

    setGroceryItems(tempGroceryItems);
  };

  const handleUpdateCompleteStatus = (indexName) => {
    const tempGroceryItems = groceryItems.map((groceryItem) =>
      groceryItem.name === indexName
        ? { ...groceryItem, completed: !groceryItem.completed }
        : groceryItem
    );

    setGroceryItems(tempGroceryItems);
  };

  useEffect(() => {
    const isAllCompleted =
      groceryItems.length > 0 && groceryItems.every((item) => item.completed);
    setIsCompleted(isAllCompleted);
  }, [groceryItems]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGroceryError("");
    }, 1000);
    return () => clearTimeout(timeout);
  }, [groceryError]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddGroceryItem();
    }
  };

  const renderGroceryList = () => {
    return groceryItems.map((item, index) => (
      <li key={index} className="product-item">
        <div className="container">
          <div className="product-info">
            <input
              type="checkbox"
              value={item.completed}
              onChange={() => handleUpdateCompleteStatus(item.name)}
            />
            <p>
              {item.name} x <b>{item.quantity}</b>
            </p>
          </div>
          <div className="qty-btns">
            <button
              className="qty-btn"
              type="button"
              onClick={() => handleQuantityChange(item.name, -1)}
            >
              -
            </button>
            <button
              className="qty-btn"
              type="button"
              onClick={() => handleQuantityChange(item.name, 1)}
            >
              +
            </button>
          </div>
        </div>
        <div>
          <button
            className="remove-button"
            onClick={() => handleRemoveGroceryItem(item.name)}
          >
            x
          </button>
        </div>
      </li>
    ));
  };

  return (
    <main className="App">
      <div className="grocery-list">
        <div>
          {groceryError && <div>{groceryError}</div>}
          {isCompleted && <h4 className="success">Shoppping Completed!</h4>}
          <div className="header">
            <h2>Shopping List</h2>
            <img src={groceryCartImg} alt="" />
            <input
              type="text"
              placeholder="Add an Item"
              className="item-input"
              value={groceryInput}
              onChange={handleChangeInputValue}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <ul>{renderGroceryList()}</ul>
      </div>
    </main>
  );
}

export default App;
