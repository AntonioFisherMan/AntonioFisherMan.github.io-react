import * as axios from "axios";

const baseUrl = "http://localhost:5000/";

let instance = axios.create({
  baseUrl: baseUrl,
  headers: {
    "x-auth-token": sessionStorage.getItem("token"),
  },
});

export const testAPI = {
  getMyUsers() {
    return axios
      .get("http://localhost:5000/users")
      .then((response) => response.data);
  },
  getGoods(pageNumber = 1, pageSize = 10) {
    return instance
      .get(
        `http://localhost:5000/goods?page=${pageNumber}&pageSize=${pageSize}`
      )
      .then((response) => response.data);
  },
  getGood(id) {
    return instance.get(baseUrl + `goods/${id}`);
  },
  login(email, password, rememberMe = false) {
    return axios.post("http://localhost:5000/auth/", {
      email,
      password,
      rememberMe,
    });
  },
  register(name, email, password) {
    return axios.post("http://localhost:5000/users", { name, email, password });
  },
  forgotPassword(forgotEmail) {
    return axios.post("http://localhost:5000/users/forgot_password", {
      forgotEmail,
    });
  },
  resetPassword(newPassword, verifyPassword, token) {
    return instance.post("http://localhost:5000/users/reset_password", {
      newPassword,
      verifyPassword,
      token,
    });
  },
  changeUserPass(oldPass, newPassword, verifyPassword, email) {
    return instance.post("http://localhost:5000/users/change_password", {
      oldPass,
      newPassword,
      verifyPassword,
      email,
    });
  },
  getAuth() {
    return instance.get("http://localhost:5000/auth/user");
  },
  getReviews() {
    return instance
      .get("http://localhost:5000/goods/reviews")
      .then((response) => response.data);
  },
  setOrders(items, inform, id) {
    return instance.post(`http://localhost:5000/orders`, {
      items,
      inform,
      userId: id,
    });
  },
  getOrders(id) {
    return instance.get(`http://localhost:5000/orders/${id}`);
  },
  getInform(id) {
    return instance.get(`http://localhost:5000/inform/${id}`);
  },
  updateInform(id, inform) {
    debugger
    const config = {
      header: {'Content-Type': 'multipart/form-data'}
    };
    return instance.put(`http://localhost:5000/inform/${id}`,inform,config );
  },
  setInform(id,inform) {
    inform.append("isAddInform",true)
    const config = {
      header: {'Content-Type':'multipart/form-data'}
    };
    return instance.post(`http://localhost:5000/inform/${id}`,inform,config );
  },
  sendHelpMessage(helpMessage, id) {
    return instance.post(`http://localhost:5000/users/help`, {
      helpMessage,
      userId: id,
    });
  },
  setReviews(name,photo,files,goodsId,rating=100) {
   files.append("name",name)
   files.append("photo",photo)
   files.append("rating",rating)
    const config = {
      header: {'Content-Type': 'multipart/form-data'}
    };
    return instance.post(
      `http://localhost:5000/goods/reviews/${goodsId}`,
      files,
      config
    );
  },
};
