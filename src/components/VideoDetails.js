import { getUserSearch } from "../api/fetch";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

//pass search results as a prop

export function VideoDetails({ searchResults, hasSearched }) {

    const allVideos = searchResults.map((item) => {
        const title = item.snippet.title
        const { url, width, height } = item.snippet.thumbnails.medium
        const id = item.id.videoId
        console.log(id)
        return (
            <div key={id}>
                <Link to={`/videos/${id}`} state={item}>
                    <img
                        src={url}
                        alt={title}
                        style={{ width: `${width}px`, height: `${height}px` }}
                    />
                </Link>
                <p>{title}</p>
            </div >
        )
    })
    return (
        <div>
            {hasSearched ? allVideos : "No search result yet! Please submit a search above"}




        </div>)
}