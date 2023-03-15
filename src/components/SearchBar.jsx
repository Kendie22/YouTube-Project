import { useState } from "react";
import React from "react";
import { Home } from "./Home.jsx";
import { Link } from "react-router-dom";

function filterVideo() {
  URL.filter(((names) => names.includes()).map);
}

export function SearchBar() {
  const [input, setUserInput] = useState("");
  const [video, setVideo] = useState({});

  function handleUserInput(event) {
    event.preventDefault();
    console.log(input)
  }

  return (
    <main>
      <form onSubmit={handleUserInput}>
        <input id="input" type="text" placeholder="search" value={input} onChange={event => { setUserInput(event.target.value) }}
        />
        <button className="submit" type="submit">Search</button>
      </form>

    </main>
  )


}