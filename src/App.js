import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { SingleVideoPage } from './components/SingleVideoPage';
import { SearchBar } from './components/SearchBar'
import { useEffect } from 'react';
// import YouTube from 'react-youtube';

function App() {
  const testYouTubeApi = () => {
    console.log(process.env.REACT_APP_YOUTUBE_API_KEY)
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
          <Route path="/video/:id" element={<SingleVideoPage />} />
          {/* <Route path="/channel/:id" element={<Home />} /> */}
          <Route path="/search/:id" element={<SearchBar />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
