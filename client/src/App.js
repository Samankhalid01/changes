import React, { useEffect, useState } from "react";

const App = () => {
  const [backendData, setBackend] = useState([{}]);
  //   useEffect(() => {
  //     fetch("/api")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setBackend(data);
  //       });
  //   }, []);
  return (
    <div>
      <h1>App</h1>
      {typeof backendData.users === "undefined" ? (
        <p>loading</p>
      ) : (
        backendData.users.map((user, i) => {
          <p key={i}>{user}</p>;
        })
      )}
    </div>
  );
};

export default App;
