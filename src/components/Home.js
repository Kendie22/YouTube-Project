
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllVideos } from "scr/api/fetch.js";

export function Home() {
    const [videos, setVideos] = useState({});
    // const [loadingError, setLoadingError] = useState(false);
    // // console.log(useParams());
    // const { id } = useParams(); //useParams gives us access to the parameters we set in our paths in our routing
    // const navigate = useNavigate();

    useEffect(() => {
        getAllVideos()
            .then((response) => {
                setVideos(response);


            }, []);

    })
}