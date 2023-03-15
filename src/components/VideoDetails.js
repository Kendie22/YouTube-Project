import { getUserSearch } from "../api/fetch";
import { SearchBar } from "./SearchBar";

//pass search results as a prop

export function VideoDetails({ searchResults }) {
    const allVideos = searchResults.map((item) => {
        console.log(item)
        const title = item.snippet.title
        const { url, width, height } = item.snippet.thumbnails.medium
        const id = item.id.videoId
        return (
            <div key={id}>
                <img
                    src={url}
                    alt={title}
                    style={{ width: `${width}px`, height: `${height}px` }}
                />
                <p>{title}</p>
            </div >
        )
    })
    return (
        <div>
            {allVideos}

        </div>)
}