import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "f2347a3b-d257-4053-8f74-25071fb0351b"
  }
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
    },
    changePhoto(file){
      debugger
      let formData = new FormData()
      formData.append("file", file)
      return instance.put(`/profile/photo`, {formData})
    }
}