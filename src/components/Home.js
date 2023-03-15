import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import getAllVideos from "../api/fetch.js";
import { SearchBar } from "./SearchBar.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getUserSearch } from "../api/fetch.js";
import { VideoDetails } from "./VideoDetails.js";


// function filterVideos(search, video) {
//     return video.filter((video) => {
//         return video.title.toLowerCase().includes(search.toLowerCase());
//     });
// }

export function Home() {

    return (
        <div>
            <section className="videos-index-wrapper">

                <br />
                <section className="videos-index">

                    <SearchBar />
                    <VideoDetails />

                </section>
            </section>

        </div>
    );
}