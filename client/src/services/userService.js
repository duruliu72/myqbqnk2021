import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/users";
export function register(user) {
    return http.post(apiEndPoint, {
        fullName: user.fullName,
        email: user.email,
        mobile: user.mobile,
        password: user.password,
    })
}
