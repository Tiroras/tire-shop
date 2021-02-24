

const URL = "https://my-json-server.typicode.com/Tiroras/mockjson"

export const newsAPI = {
  getPosts(){
    return fetch(`${URL}/posts`).then((res: Response) => {
      console.log(res)
      return res.json();
    })
  },

  getPost(id: number){
    return fetch(`${URL}/posts?id=${id}`).then((res: Response) => {
      return res.json();
    })
  }
}

export const catalogAPI = {
  getProducts(type: string){
    return fetch(`${URL}/products?type=${type}`).then((res: Response) => {
      return res.json();
    })
  },

  getProduct(id: number){
    return fetch(`${URL}/products?id=${id}`).then((res: Response) => {
      return res.json();
    })
  },

  getProductByName(type: string, name: string){
    return fetch(`${URL}/products?type=${type}`).then((response: Response) => {
      return response.json();
    }).then(data => {
      console.log(data)
      const answer = data.reduce((array, product) => {
        if(product.name.includes(name)){
          array.push(product);
        }
        return array;
      }, [])
      console.log(answer)
      return answer;
    });
  }
}

export const orderAPI = {
  postOrder(order){
    console.log(order)
    return fetch(`${URL}/orders`, {
      method: "POST",
      body: JSON.stringify(order)
    })
  }
}

export const feedbackAPI = {
  postFeedback(feedback){
    console.log(feedback)
    return fetch(`${URL}/feedbacks`, {
      method: "POST",
      body: JSON.stringify(feedback)
    })
  }
}

// export const newsAPI = {
//   getPosts(){
//     return instance.get("posts").then(response => {
//       return response.data;
//     });
//   },
//
//   getPost(id: number){
//     return instance.get(`posts/${id}`).then(response => {
//       return response.data;
//     })
//   }
// }
//
// export const catalogAPI = {
//   getProducts(type: string){
//     return instance.get(`products?type=${type}`).then(response => {
//       return response.data;
//     });
//   },
//
//   getProduct(id: number){
//     return instance.get(`products?id=${id}`).then(response => {
//       return response.data
//     });
//   },
//
//   getProductsByProperties(property: string, value: string){
//     return instance.get(`products/properties?${property}=${value}`).then(response => {
//       return response.data;
//     });
//   },
//
//   getProductByName(type: string, name: string){
//     return instance.get(`products?type=${type}&name=${name}`).then((response => {
//       return response.data;
//     }));
//   }
// }