import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
});

export const SocialAPI = {
    getAll(page = 1){
        return instance.get(`/users?page=${page}&count=100`)
    },
    getProfile(userId) {
      return instance.get(`/profile/${userId}`)
    },
    setLogin(email, password){
      return instance.post(`/auth/login`, {email, password})
    }
}