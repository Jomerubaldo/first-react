import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');

  const handleBlue = () => {
    setColor('Blue');
  };

  const handleRed = () => {
    setColor('Red');
  };

  return (
    <>
      <h1>My favorite color is {color}</h1>

      <div className="space-x-2">
        <button
          className="bg-blue-400 px-3 py-1"
          type="button"
          onClick={handleBlue}
        >
          Blue
        </button>
        <button
          className="bg-red-400 px-3 py-1"
          type="button"
          onClick={handleRed}
        >
          Red
        </button>
      </div>
    </>
  );
}

export default App;
