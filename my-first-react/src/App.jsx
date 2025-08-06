import { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState([]);
  const [text, setText] = useState('');

  return (
    <>
      <table className="table table-striped-columns">
        <thead>
          <tr>
            <th scope="col">To Do</th>
            <th scope="col">In Progress</th>
            <th scope="col">Done</th>
          </tr>
        </thead>
        <tbody>
          {inputValue.map((value, i) => (
            <tr key={i}>
              <td>{value}</td>
            </tr>
          ))}
          <tr>
            <td>Play</td>
            <td>Laundry</td>
            <td>Cook</td>
          </tr>
          <tr>
            <td>Dinner</td>
            <td>Bathroom</td>
            <td>Wash</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center">
        <h1>Canban Board</h1>
        <div>
          <input
            placeholder="Enter To-Do"
            className="border border-black outline-1 px-2 py-1"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            className="bg-green-400 px-3 py-2"
            onClick={() => {
              if (text) setInputValue([...inputValue, text]);
              setText();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};
export default App;
