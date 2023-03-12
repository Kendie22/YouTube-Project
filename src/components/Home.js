import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import getAllVideos from "../api/fetch";


export function Home() {
    const [videos, setVideos] = useState({});
    const { id } = useParams()
    const [loadingError, setLoadingError] = useState(false);
    console.log(useParams());
    const navigate = useNavigate();
    console.log(getAllVideos(id))

    useEffect(() => {

        getAllVideos()
            .then((response) => {
                console.log(response)
                setVideos(response);
                if (response.id) {
                    setLoadingError(false);
                } else {
                    setLoadingError(true);
                }
            })
            .catch((error) => {
                console.log(error);
                setLoadingError(true);
            });
    }, [id]);


    return (

        <aside>
            <button className="search" onClick={() => setVideos(videos.id)}>
            </button>
            <Link to={`/videos/${id}`}>
                <button>Search</button>
            </Link>
        </aside>
    )

}
