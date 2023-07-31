import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID jWxoRVwN6bXYGvZ10C4OCjq8LpDUIp03M7rpSigshUw",
    },
});
