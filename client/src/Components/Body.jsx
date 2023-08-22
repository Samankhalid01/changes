import React, { useState } from "react";

const Body = () => {
  const [data, setData] = useState({
    nam: "",
    time: "",
    memory: "",
  });

  const handleInputs = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handlePostData = async (e) => {
    e.preventDefault();
    const { nam, time, memory } = data;
    try {
      const response = await fetch("http://localhost:5000/api/memories", {
        method: "POST",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nam,
          time,
          memory,
        }),
      });
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="body-container">
      <form onSubmit={handlePostData}>
        <input
          type="text"
          placeholder="Name"
          name="nam"
          onChange={handleInputs}
        />
        <input
          type="text"
          placeholder="Time"
          name="time"
          onChange={handleInputs}
        />
        <textarea
          placeholder="Memory Text"
          name="memory"
          onChange={handleInputs}
        />
        <button type="submit">Add Memory</button>
      </form>
    </div>
  );
};

export default Body;
