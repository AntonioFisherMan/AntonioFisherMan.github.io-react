import * as axios from "axios";
const baseUrl="https://social-network.samuraijs.com/api/1.0/";
let instance = axios.create({
  baseUrl: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  getStatus(user_id){
    return instance.get(baseUrl+'profile/status/'+2)
    .then(response=>response.data)
  },
  updateStatus(status){
    return instance.put(baseUrl+'profile/status/',{status:status})
    .then(response=>response.data)
   
  }
};

export const authAPI = {
  getAuth:()=>instance.get(baseUrl+"/auth/me"),
  login(email,password,rememberMe=false){
    return instance.post(baseUrl+"/auth/login",{email,password,rememberMe})
  },
  logout(){
    return instance.delete(baseUrl+"/auth/login")
  }

};
