import axios from "axios";
const KEY = "AIzaSyBKvOY1WYXb5fvQaLCMRkDeUqs_84tBVAY";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});
