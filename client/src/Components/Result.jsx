import React from "react";

const Result = ({ memories }) => {
    return (
        <div className="result-container">
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
    );
};

export default Result;
