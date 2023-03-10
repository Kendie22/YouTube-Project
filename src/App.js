import './App.css';
import { BrowserRouter, Routes, Route, useActionData } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Feed } from './components/Feed';
import { VideoDetails } from './components/VideoDetails';
import { SearchFeed } from './components/SearchFeed'
import { ChannelDetails } from './components/ChannelDetails'
import { useEffect } from 'react';

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
        \        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:id" element={<SearchFeed />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
