import { useState } from "react";
import React from "react";
// import { Search } from "@mui/icons-material";

function filter() {
  URL.filter(((names) => names.includes()).map);
}

export function SearchBar() {
  const [input, setUserInput] = useState("");

  function handleUserInput(event) {
    event.preventDefault();
    setUserInput(event.target.value);
  }

  return;
  <main>
    <form>onSubmit={handleUserInput}</form>

    <button type="submit">Search</button>
  </main>;
}
