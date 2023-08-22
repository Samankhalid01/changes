import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [memories, setMemories] = useState([]);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [memoryText, setMemoryText] = useState("");

  useEffect(() => {
    fetch("/api/memories")
      .then((response) => response.json())
      .then((data) => {
        setMemories(data);
      });
  }, []);

  const handleAddMemory = () => {
    if (name && time && memoryText) {
      axios
        .post("/api/memories", {
          name,
          time,
          memoryText,
        })
        .then((response) => {
          setMemories([...memories, response.data]);
          setName("");
          setTime("");
          setMemoryText("");
        })
        .catch((error) => {
          console.error("Error adding memory:", error);
        });
    }
  };

  return (
    <div className="app-container">
      <header>
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="Logo"
          className="logo"
        />
      </header>
      <div className="memory-form">
        <h2>Add a Memory</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <textarea
          placeholder="Memory Text"
          value={memoryText}
          onChange={(e) => setMemoryText(e.target.value)}
        />
        <button onClick={handleAddMemory}>Add Memory</button>
      </div>
      <div className="memories-list">
        <h2>Memories</h2>
        <ul>
          {memories.map((memory, index) => (
            <li key={index}>
              <strong>{memory.name}</strong> - {memory.time}
              <p>{memory.memoryText}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
