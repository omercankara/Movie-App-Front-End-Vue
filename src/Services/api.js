import axios from "axios"
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTIxMDVhYWM5MzMwM2JmMjZlNmJhMWFhZTcxMmU1YiIsInN1YiI6IjYyN2E5OTI2MGYyYWUxMDA2NjlhZThhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AHME5grE1JvSq9GUq6SGrZ_Rh-T5dJ_QKP2VInT58eM"
export default axios.create({
        baseURL:"https://api.themoviedb.org/3",
        headers:{
                Authorization:` Bearer ${token}`
        }
})