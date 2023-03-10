const URL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;


const getAllVideos = () => {

    return (fetch(`${URL}`).then((response) => response.json()));
}

export default getAllVideos