//https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);
  const [gameList, setGameList] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  React.useEffect(() => {
    fetch("/api/games")
      .then((res) => res.json())
      .then((data) => setGameList(data.games));
  }, []);

  useEffect(() => {
    console.log("gameList", gameList);
  }, [gameList]);

  return (
    <div className="App">
      <header className="App-header">
        {!gameList ? (
          "Loading..."
        ) : (
          <>
            <ul style={{ display: "flex", listStyle: "none" }}>
              {gameList.map((item) => (
                <li style={{ height: "100px" }}>
                  <a
                    href={item.url}
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                      }}
                    >
                      <p>{item.name}</p>
                      <img className="header-image" src={item.imageUrl}></img>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </header>
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default App;
