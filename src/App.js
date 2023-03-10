import React from "react";
// import { About } from "./components/About";
import { Home } from "./components/Home";
import { useEffect } from "react";
function App() {
  const testyouTubeAPI = () => {
    console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
  };
  useEffect(() => {
    testyouTubeAPI();
  });

  return;
  <Home />;
}

export default App;
