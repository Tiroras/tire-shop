import axios from "axios";
import {createServer} from "miragejs";
import MockAdapter from "axios-mock-adapter";


// const mock = new MockAdapter(axios)
//
// mock.onGet("/posts").reply(() => {
//   const posts = [
//     {
//       id: 1,
//       header: "Мы открылись",
//       text: "Спешим сообщить вам что наш автосалон наконец открыт для вас. Ждем посетителей.",
//       img: ""
//     },
//     {
//       id: 2,
//       header: "Сайт открыт",
//       text: "Спешим сообщить вам что наш автосалон наконец открыл для вас сайт.. Ждем посетителей.",
//       img: ""
//     }
//   ];
//   return posts;
// })
//
// mock.onGet()


const instance = axios.create({
  baseURL: 'http://localhost:4200'
});


// export const newsAPI = {
//   getPosts(){
//     return fetch("posts").then(res => {
//       return res.json();
//     })
//   },
//
//   getPost(id: number){
//     return fetch(`posts/${id}`).then(res => {
//       return res.json();
//     })
//   }
// }
//
// export const catalogAPI = {
//   getProducts(type: string){
//     return fetch(`products?type=${type}`).then(res => {
//       return res.json();
//     })
//   },
//
//   getProduct(id: number){
//     return fetch(`products?id=${id}`).then(res => {
//       return res.json();
//     })
//   },
//
//   getProductByName(type: string, name: string){
//     return fetch(`products?type=${type}&name=${name}`).then((response => {
//       return response.json();
//     }));
//   }
// }

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
    });
  },

  getProduct(id: number){
    return instance.get(`products?id=${id}`).then(response => {
      return response.data
    });
  },

  getProductsByProperties(property: string, value: string){
    return instance.get(`products/properties?${property}=${value}`).then(response => {
      return response.data;
    });
  },

  getProductByName(type: string, name: string){
    return instance.get(`products?type=${type}&name=${name}`).then((response => {
      return response.data;
    }));
  }
}


export function makeServer() {
  const server = createServer({

    routes() {
      this.namespace = "http://someapi.api/"

      this.get("posts", () => {
        const posts = [
          {
            id: 1,
            header: "Мы открылись",
            text: "Спешим сообщить вам что наш автосалон наконец открыт для вас. Ждем посетителей.",
            img: ""
          },
          {
            id: 2,
            header: "Сайт открыт",
            text: "Спешим сообщить вам что наш автосалон наконец открыл для вас сайт.. Ждем посетителей.",
            img: ""
          }
        ];
        return posts;
      });

      this.get(`products?type:type`, (type) => {
        const products = [
          {
            id: 1,
            name: "disk 1",
            price: 4523,
            type: "disks",
            inStock: false,
            attributesID: 1
          },
          {
            id: 2,
            name: "disk 2",
            price: 4523,
            type: "disks",
            inStock: true,
            attributesID: 3
          },
          {
            id: 3,
            name: "tire 1",
            price: 4523,
            type: "tires",
            inStock: true,
            attributesID: 2
          },
          {
            id: 4,
            name: "tire 2",
            price: 4523,
            type: "tires",
            inStock: false,
            attributesID: 4
          },
          {
            id: 5,
            name: "mats 1",
            price: 4523,
            type: "mats",
            inStock: false,
            attributesID: null
          },
          {
            id: 6,
            name: "mats 2",
            price: 4523,
            type: "mats",
            inStock: true,
            attributesID: null
          },
          {
            id: 7,
            name: "carGood 1",
            price: 1245,
            type: "carGoods",
            inStock: true,
            attributesID: null
          },
          {
            id: 8,
            name: "carGood 2",
            price: 1245,
            type: "carGoods",
            inStock: false,
            attributesID: null
          },
          {
            id: 9,
            name: "fafnir",
            price: 4523,
            type: "disks",
            inStock: false,
            attributesID: 1
          }
        ];
        return products;
      })

      this.post("orders", (schema, request) => {
        return {order: request.requestBody}
      })
    },
  })

  return server
}