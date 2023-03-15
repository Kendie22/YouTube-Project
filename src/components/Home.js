import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import getAllVideos from "../api/fetch.js";
import { SearchBar } from "./SearchBar.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getUserSearch } from "../api/fetch.js";
import { VideoDetails } from "./VideoDetails.js";


export function Home() {
    const [searchResults, setSearchResults] = useState([])
    const [hasSearched, setHasSearched] = useState(false)

    return (
        <div>
            <section className="videos-index-wrapper">

                <br />
                <section className="videos-index">

                    <SearchBar setSearchResults={setSearchResults} setHasSearched={setHasSearched} />
                    <VideoDetails searchResults={searchResults} hasSearched={hasSearched} />

                </section>
            </section>

        </div>
    );
}