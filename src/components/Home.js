import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import getAllVideos from "../api/fetch";
import { SearchBar } from "./SearchBar";


export function Home() {
    const [videos, setVideos] = useState({});
    const { id } = useParams()
    const [loadingError, setLoadingError] = useState(false);

    useEffect(() => {

        getAllVideos()
            .then((response) => {
                setVideos(response);
                if (response) {
                    setLoadingError(false);
                } else {
                    setLoadingError(true);
                }
            })
            .catch((error) => {
                console.log(error);
                setLoadingError(true);
            });
    }, []);


    return (

        <aside>

            {/* <button className="search" onClick={() => setVideos(videos)}> Search
            </button> */}
            <SearchBar />
        </aside>

    )

}
