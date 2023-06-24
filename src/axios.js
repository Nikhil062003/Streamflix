import axios from "axios"

// base url to make requests to the movie database
const instance =axios.create({
    baseURL:"https://api.themoviedb.org/3",
});
 
// instance.get('/foo-bar'); by using axios we append the url bcz there is multiple requests at same time
//htpps://api.themoviedb.org/3/foo-bar
export default instance;