import {IDisk, IProduct, ITire} from "../../interfaces/catalog/IProducts.type";
import {catalogAPI} from "../../api/api";
import {Dispatch} from "redux";


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
const CLEAR_CART = "CLEAR-CART";

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
      return {...state,
        cart: {...state.cart,
          products: [...state.cart.products, action.data[0]]
        }
      }
    }
    case SET_NUMBERS: {
      return {...state, cart: {...state.cart, numbers: state.cart.products.length}}
    }
    case SET_TOTAL_PRICE: {
      let prices: Array<number> = [];
      let array: IProduct[] | IDisk[] | ITire[] = state.cart.products;
      array.forEach((item: IProduct | IDisk | ITire) => {
        prices.push(item.price);
      })
      let totalPrice = prices.reduce(
        (sum: number, current: number) => sum + current, 0)
      return {...state, cart: {...state.cart, totalPrice}}
    }
    case CLEAR_CART: {
      return {...state, cart: {...state.cart, products: []}}
    }
    default: return state;
  }
}

export default cartReducer;

export const setCartAC = (data) => ({type: SET_CART, data});
export const setNumbersAC = () => ({type: SET_NUMBERS});
export const clearCartAC = () => ({type: CLEAR_CART});
export const setTotalPriceAC = () => ({type: SET_TOTAL_PRICE})


export const addToCart = (id: number) => (dispatch: Dispatch) => {
  catalogAPI.getProduct(id).then(response => {
    dispatch(setCartAC(response));
    dispatch(setNumbersAC());
    dispatch(setTotalPriceAC());
  })
}

export const clearCart = () => (dispatch: Dispatch) => {
  dispatch(clearCartAC());
  dispatch(setNumbersAC());
}