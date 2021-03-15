import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/genres";
export function getGenres() {
    return http.get(apiEndPoint)
}
export function SaveGenre(genre) {
    return http.post(apiEndPoint, genre)
}
export function updateGenre(genre) {
    return http.put(apiEndPoint + "/" + genre._id)
}
export function deleteGenre(genreId) {
    return http.delete(apiEndPoint + "/" + genreId)
}

export function getGenre(genreId) {
    return http.get(apiEndPoint + "/" + genreId)
}