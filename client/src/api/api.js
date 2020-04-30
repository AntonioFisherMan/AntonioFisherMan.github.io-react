import * as axios from "axios";


const baseUrl = "http://localhost:5000/";

let instance = axios.create({
  baseUrl: baseUrl,
  headers: {
    "x-auth-token":sessionStorage.getItem('token')
  },
});

export const testAPI = {
  getMyUsers() {
    return axios
      .get("http://localhost:5000/users")
      .then((response) => response.data);
  },
  getGoods(token) {
    return instance
      .get("http://localhost:5000/goods")
      .then((response) => response.data);
  },
  getGood(id){
    debugger
   return instance.get(baseUrl+`goods/${id}`)
  },
  login(email, password,rememberMe=false) {
    return axios.post("http://localhost:5000/auth/", { email, password,rememberMe });
  },
  register(name, email, password) {
    return axios.post("http://localhost:5000/users", { name, email, password });
  },
  getAuth() {
    return instance.get("http://localhost:5000/auth/user")
  },
  getReviews(){
    return instance.get("http://localhost:5000/goods/reviews")
    .then(response=>response.data)
  },
  setOrders(items,inform,id){
    debugger
   return instance.post(`http://localhost:5000/orders`,{items,inform,userId:id})
  },
  getOrders(id){
    return instance.get(`http://localhost:5000/orders/${id}`)
  },
  setReviews(name,photo,images,reviews,rating){
    debugger
      const photoData=new FormData();
      for(var i=0;i<images.length;i++){
      photoData.append("image"+i,images[i]);
      console.log(images[i])
    }
     return instance.post('http://localhost:5000/goods/reviesws',{name,photo,photoData,reviews,rating},{
       headers:{
       'Content-Type':'multipart/form-data'
       }
     })
    }
};
