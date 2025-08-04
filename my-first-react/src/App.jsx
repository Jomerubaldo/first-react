import { useState } from 'react';

function App() {
  const [fruits, setFruits] = useState(['Banana', 'Apple', 'Orange']);
  const [isChecked, setIsChecked] = useState(false);

  const handleShow = () => {
    setIsChecked(!isChecked);
  };

  const handleAddFruits = () => {
    setFruits((fruits) => [...fruits, 'Melon']);
  };

  const handleRemoveFruits = (fruitIndex) => {
    const filteredFruits = fruits.filter(
      (fruit, index) => index !== fruitIndex
    );
    setFruits(filteredFruits);
  };

  return (
    <>
      <div>
        <label>Show</label>
        <input type="checkbox" onChange={handleShow} checked={isChecked} />
      </div>
      <button onClick={handleAddFruits}>Add fruits</button>
      <ul>
        {isChecked &&
          fruits.map((fruit, index) => {
            return (
              <div key={index}>
                <li>{fruit}</li>
                <button onClick={() => handleRemoveFruits(index)}>
                  Remove fruits
                </button>
              </div>
            );
          })}
      </ul>
    </>
  );
}

export default App;
