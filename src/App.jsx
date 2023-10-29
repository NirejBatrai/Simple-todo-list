import React, { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [todos, settodos] = useState([]);

  const addData = () => {
    settodos([...todos, userInput]);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div className="input-button-container">
        <input
          onChange={(event) => setUserInput([event.target.value])}
          type="text"
        ></input>
        <button onClick={() => addData()}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
