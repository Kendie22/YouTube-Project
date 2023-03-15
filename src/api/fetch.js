const URL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export function getUserSearch(userSearch) {
    const userSearchURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${userSearch}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    return (fetch(userSearchURL).then((response) => response.json()));
}
const getAllVideos = () => {

    return (fetch(URL).then((response) => response.json()));
}

export default getAllVideos