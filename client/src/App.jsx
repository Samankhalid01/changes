import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Result from "./Components/Result";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  const [memories, setMemories] = useState([]);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [memoryText, setMemoryText] = useState("");

  useEffect(() => {
    fetch("/api/memories").then((response) => console.log(response));
    // .then((data) => {
    //   console.log(data);
    //   setMemories(data);
    // });
  }, []);

  const handleAddMemory = () => {
    if (name && time && memoryText) {
      const newMemory = {
        name: name,
        time: time,
        memoryText: memoryText,
      };

      axios
        .post("/api/memories", newMemory)
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
      <Header />
      <Body
        name={name}
        setName={setName}
        time={time}
        setTime={setTime}
        memoryText={memoryText}
        setMemoryText={setMemoryText}
        handleAddMemory={handleAddMemory}
      />
      <Result memories={memories} />
      <Footer />
    </div>
  );
};

export default App;
