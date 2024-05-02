import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

export interface Gift {
  id: string;
  image: string;
  name: string;
  value: number;
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [gifts, setGifts] = useState<Gift[]>([]);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSave = (gift: Gift) => {
    setGifts([...gifts, gift]);
  };

  return (
    <div className="App">
      {/* {
        open && <Modal />
         // This condition will always return true since this function is always defined. Did you mean to call it instead?
      } */}

      {showModal && <Modal onClose={handleClose} onSave={handleSave} />}
      <h1>My Birthday Gifts</h1>
      <div className="cards">
        <button onClick={handleOpen}>Add a Gift</button>
      </div>
      <div className="cards-gift">
        {gifts.map((gift) => (
          <div className="card-gift" key={gift.id}>
            <img src={gift.image} alt="" />
            <h1>{gift.name}</h1>
            <p>${gift.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
