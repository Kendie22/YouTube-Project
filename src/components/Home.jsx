import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import getAllVideos from "../api/fetch.jxs";
import { SearchBar } from "./SearchBar.jxs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getUserSearch } from "../api/fetch.jxs";


// function filterVideos(search, video) {
//     return video.filter((video) => {
//         return video.title.toLowerCase().includes(search.toLowerCase());
//     });
// }

export function Home() {
    // const [search, setSearch] = useState("")
    const [searchBy, setSearchBy] = useState("")
    const [videos, setVideos] = useState({});
    const { id } = useParams()
    const [allVideos, setAllVideos] = useState()
    const errorMessage = "Please search a video"

    function handleUserSearch(event) {
        setSearchBy(event.target.value);
        const result = event.target.value.length ? getUserSearch(event.target.value, allVideos) : allVideos
        setVideos(result);

    }
    useEffect(() => {

        getUserSearch()
            .then((response) => {
                setAllVideos(response);
                setVideos(response)

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <div>
            <section className="videos-index-wrapper">
                <h2>All videos</h2>
                <button>
                    <Link to="/">search a video</Link>
                </button>
                <br />
                <label htmlFor="searchVideo">
                    Search Video:
                    <input
                        type="text"
                        value={searchBy}
                        id="searchTitle"
                        onChange={handleUserSearch}
                    />
                </label>
                <section className="videos-index">
                    {/* {videos.map((video) => {
                        return <SearchBar video={video} key={video.id} />;
                    })} */}
                </section>
            </section>

        </div>
    );
}