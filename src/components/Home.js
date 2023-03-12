import { type } from "@testing-library/user-event/dist/type";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import getAllVideos from "../api/fetch";


export function Home() {
    const [videos, setVideos] = useState({});
    const { channel } = useParams()
    const [loadingError, setLoadingError] = useState(false);
    console.log(useParams());
    const navigate = useNavigate();
    console.log(getAllVideos(channel))

    useEffect(() => {

        getAllVideos()
            .then((response) => {
                console.log(response)
                setVideos(response);
                if (response.channel) {
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
            <button className="search" onClick={() => setVideos(videos.channel)}>
            </button>
            <Link to={`/videos/${channel}`}>
                <button>Search</button>
            </Link>
        </aside>
    )

}
