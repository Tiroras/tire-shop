import axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:4200'
});

export const newsAPI = {
  getPosts(){
    return instance.get("posts").then(response => {
      return response.data;
    });
  },

  getPost(id){
    return instance.get(`posts/${id}`).then(response => {
      return response.data;
    })
  }
}

export const catalogAPI = {
  getProducts(type){
    return instance.get(`${type}`).then(response => {
      return response.data
    })
  }
}