import React from "react";

const Body = () => {
    return (
        <div className="body-container">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Time" />
            <textarea placeholder="Memory Text" />
            <button>Add Memory</button>
        </div>
    );
};

export default Body;
