import * as axios from "axios";
import { saveProfile, savePhoto } from "../redux/UsersReducer";

const baseUrl="https://social-network.samuraijs.com/api/1.0/";
let instance = axios.create({
  baseUrl: baseUrl,
  withCredentials: true,
  headers:{
  "API-KEY":"53970058-ca43-497a-9204-bdc7801f357e"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);  
  },
  getStatus(user_id){
    return instance.get(baseUrl+`profile/status/${user_id}`)
    .then(response=>response.data)
  },
  updateStatus(status) {
    return instance.put(baseUrl + 'profile/status/', {status: status})
        .then(response => response.data)
  },
  getProfileInform(user_id){
    return instance.get(baseUrl+`profile/${user_id}`)
  },
  saveProfile(profile){
    return instance.put(baseUrl+'profile',profile)
  },
  savePhoto(photo){
    debugger
    const photoData=new FormData();
    photoData.append("image",photo);
   return instance.put(baseUrl+'profile/photo',photoData,{
     headers:{
     'Content-Type':'multipart/form-data'
     }
   })
  }
}

export const authAPI = {
  getAuth:()=>instance.get(baseUrl+"/auth/me"),
  login(email,password,rememberMe=false,captcha){
    return instance.post(baseUrl+"/auth/login",{email,password,rememberMe,captcha})
  },
  logout(){
    return instance.delete(baseUrl+"/auth/login")
  }
};

export const testAPI={
  getMyUsers(){
    return axios.get("http://localhost:5000/users")
    .then(response=>response.data)
  },
  getGoods(){
    return axios.get("http://localhost:5000/goods")
    .then(response=>response.data)
 
  }
}

export const securityAPI={
  getCaptchaUrl(){
    return instance.get(baseUrl+'security/get-captcha-url'); 
  }
}