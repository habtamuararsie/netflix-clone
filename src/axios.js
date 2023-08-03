import axios from "axios";


const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});
//instance.get("/movie/top_rated");
// baseURL:"https://api.themoviedb.org/3/movie/top_rated",
// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "text/plain",
//   },
// };
// https: config,

export default instance;
