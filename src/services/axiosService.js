import APIrequest from "../utils/axios.config";

export function getRandomJoke(){
    return APIrequest.get("/")
}