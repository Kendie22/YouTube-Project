import { useState } from "react";
import { SearchBar } from "./SearchBar.js";
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