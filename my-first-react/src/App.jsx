import { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState([]);
  const [text, setText] = useState('');

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleButton = () => {
    if (text) setInputValue([...inputValue, text]);
    setText('');
  };

  return (
    <>
      <div className="bg-gray-500 h-screen">
        <div className="flex gap-4 p-4">
          {/* To Do Column */}
          <div className="bg-gray-100 p-4 rounded w-1/3">
            <h2 className="text-lg font-bold mb-4">To-Do Task</h2>
            <div className="flex flex-col gap-2">
              {inputValue.map((value, index) => (
                <div key={index} className="bg-white p-2 rounded shadow">
                  {value}
                  <button className="float-right bg-red-400 px-2 py-1">
                    Delete
                  </button>
                  <button className="float-right bg-green-400 px-2 py-1 relative right-2">
                    Start
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* In Progress Column */}
          <div className="bg-gray-100 p-4 rounded w-1/3">
            <h2 className="text-lg font-bold mb-4">In Progress</h2>
            <div className="flex flex-col gap-2">
              <div className="bg-white p-2 rounded shadow">Task A</div>
              <div className="bg-white p-2 rounded shadow">Task B</div>
            </div>
          </div>

          {/* Done Column */}
          <div className="bg-gray-100 p-4 rounded w-1/3">
            <h2 className="text-lg font-bold mb-4">Done Task</h2>
            <div className="flex flex-col gap-2">
              <div className="bg-white p-2 rounded shadow">Task X</div>
              <div className="bg-white p-2 rounded shadow">Task Y</div>
            </div>
          </div>
        </div>

        {/* Function area */}
        <div className="text-center pt-20">
          <h1>Canban Board</h1>
          <div>
            <input
              placeholder="Enter To-Do"
              className="border border-black outline-1 px-2 py-1"
              onChange={handleInput}
              value={text}
            />
            <button className="bg-green-400 px-3 py-2" onClick={handleButton}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
