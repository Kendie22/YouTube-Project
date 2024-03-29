import { NavBar } from "./components/NavBar.js";
import About from "./components/About.js";
import { Home } from "./components/Home.js";
import { SingleVideoPage } from "./components/SingleVideoPage";
import { SearchBar } from "./components/SearchBar.js";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const testYouTubeApi = () => {
    // console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
  };
  useEffect(() => {
    testYouTubeApi();
  });

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/videos/:id" element={<SingleVideoPage />} />
          <Route path="/search/:id" element={<SearchBar />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
