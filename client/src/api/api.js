import * as axios from "axios";

const baseUrl = "https://fullstack-shop.herokuapp.com/";

let instance = axios.create({
  baseUrl: baseUrl,
  headers: {
    "x-auth-token": sessionStorage.getItem("token"),
  },
});

export const testAPI = {
  changeFilter(data,pageSize=10,pageNumber=1){
    debugger
    return axios.post(
      baseUrl+`goods?page=${pageNumber}&pageSize=${pageSize}`,{data}
    )
},
subscribeNewUser(email){
  debugger
return axios.post( baseUrl+'auth/subscribe',{email})
},
  getMyUsers() {
    return axios
      .get(baseUrl+"users")
      .then((response) => response.data);
  },
  getGood(id) {
    return instance.get(baseUrl + `goods/${id}`);
  },
  login(email, password, rememberMe = false) {
    return axios.post(baseUrl+"auth/", {
      email,
      password,
      rememberMe,
    });
  },
  register(name, email, password) {
    return axios.post(baseUrl+"users", { name, email, password });
  },
  forgotPassword(forgotEmail) {
    return axios.post(baseUrl+"users/forgot_password", {
      forgotEmail,
    });
  },
  resetPassword(newPassword, verifyPassword, token) {
    return instance.post(baseUrl+"users/reset_password", {
      newPassword,
      verifyPassword,
      token,
    });
  },
  changeUserPass(oldPass, newPassword, verifyPassword, email) {
    return instance.post(baseUrl+"users/change_password", {
      oldPass,
      newPassword,
      verifyPassword,
      email,
    });
  },
  getAuth() {
    return instance.get(baseUrl+"auth/user");
  },
  getReviews() {
    return instance
      .get(baseUrl+"goods/reviews")
      .then((response) => response.data);
  },
  setOrders(items, inform, id) {
    return instance.post(baseUrl+`orders`, {
      items,
      inform,
      userId: id,
    });
  },
  setUnloginOrders(data){
    return instance.post(baseUrl+`orders/unlogin`, {
      data
    });
  },
  getOrders(id) {
    return instance.get(baseUrl+`orders/${id}`);
  },
  getInform(id) {
    return instance.get(baseUrl+`inform/${id}`);
  },
  updateInform(id, inform) {
    debugger  
    const config = {
      header: {'Content-Type': 'multipart/form-data'}
    };
    return instance.put(baseUrl+`inform/${id}`,inform,config );
  },
  setInform(id,inform) {
    inform.append("isAddInform",true)
    const config = {
      header: {'Content-Type':'multipart/form-data'}
    };
    return instance.post(baseUrl+`inform/${id}`,inform,config );
  },
  sendHelpMessage(helpMessage, id) {
    return instance.post(baseUrl+`users/help`, {
      helpMessage,
      userId: id,
    });
  },
  setReviews(name,photo,files,goodsId,rating=100) {
    debugger
   files.append("name",name)
   files.append("photo",photo)
   files.append("rating",rating)
    const config = {
      header: {'Content-Type': 'multipart/form-data'}
    };
    return instance.post(
      baseUrl+`goods/reviews/${goodsId}`,
      files,
      config
    );
  },
};
