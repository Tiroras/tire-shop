import {IDisk, IProduct, ITire} from "../../interfaces/catalog/IProducts.type";


interface ICart{
  products: IProduct[] | IDisk[] | ITire[];
  numbers: null | number;
  totalPrice: null | number;
}

interface IState {
  cart: ICart;
}

const SET_CART = "SET-CART";
const SET_NUMBERS = "SET-NUMBERS";
const SET_TOTAL_PRICE = "SET-TOTAL-PRICE";

const initialState: IState = {
  cart: {
    products: [],
    numbers: null,
    totalPrice: null
  }

}

const cartReducer = (state: IState = initialState, action) => {
  switch (action.type) {
    case SET_CART: {
      return {...state, cart: {...state.cart, products: action.data}}
    }
    case SET_NUMBERS: {
      return {...state, cart: {...state.cart, numbers: state.cart.products.length+1}}
    }
    case SET_TOTAL_PRICE: {
      let prices: Array<number> = [];
      let array = state.cart.products;
      array.forEach((item: IProduct | IDisk | ITire) => {
        prices.push(item.price);
      })
      let totalPrice = prices.reduce(
        (sum: number, current: number) => sum + current, 0)
      return {...state, cart: {...state.cart, totalPrice}}
    }
    default: return state;
  }
}

export default cartReducer;