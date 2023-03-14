import { useState } from "react";
import React from "react";
import { Home } from "./Home";
import { Link } from "react-router-dom";

function filterVideo() {
  URL.filter(((names) => names.includes()).map);
}

export function SearchBar() {
  const [input, setUserInput] = useState("");

  function handleUserInput(event) {
    event.preventDefault();
    setUserInput(event.target.value);
  }

  return (
    <main>
      <form onSubmit={handleUserInput({ input })}>
        <input id="input" type="text" placeholder="search" value={input} onSubmit={event => { setUserInput(event.target.value) }}
        />
        <button className="submit" >Search</button>
        <input type="submit" />
      </form>

    </main>
  )


}