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

  getPost(id: number){
    return instance.get(`posts/${id}`).then(response => {
      return response.data;
    })
  }
}

export const catalogAPI = {
  getProducts(type: string){
    return instance.get(`products?type=${type}`).then(response => {
      return response.data;
    })
  },

  getProduct(id: number){
    return instance.get(`products?id=${id}`).then(response => {
      return response.data
    })
  },

  getProductsByProperties(property: string, value: string){
    return instance.get(`products/properties?${property}=${value}`).then(response => {
      return response.data;
    })
  },

  getProductByName(type: string, name: string){
    return instance.get(`products?type=${type}&name=${name}`).then((response => {
      return response.data;
    }))
  }
}