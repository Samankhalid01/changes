import React, { useState, useEffect } from "react";
import axios from "axios";

const Result = () => {
    const [memories, setMemories] = useState([]);

    useEffect(() => {
        fetchMemories();
    }, []);

    const fetchMemories = async () => {
        try {
            const response = await axios.get("/api/memories");
            setMemories(response.data);
        } catch (error) {
            console.error("Error fetching memories:", error);
        }
    };

    const handleDeleteMemory = async (id) => {
        try {
            await axios.delete(`/api/memories/${id}`);
            fetchMemories();
        } catch (error) {
            console.error("Error deleting memory:", error);
        }
    };

    const handleEditMemory = async (id) => {
        // Implement edit logic here
    };

    return (
        <div className="result-container">
            <h2>Memories</h2>
            <ul>
                {memories.map((memory, index) => (
                    <li key={index}>
                        <strong>{memory.title}</strong>
                        <p>{memory.description}</p>
                        <button onClick={() => handleDeleteMemory(memory._id)}>Delete</button>
                        <button onClick={() => handleEditMemory(memory._id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Result;
