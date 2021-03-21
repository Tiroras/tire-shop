import {IDisk, IProduct, ITire} from "../../interfaces/catalog/IProducts.type";
import {catalogAPI} from "../../api/api";
import {Dispatch} from "redux";


export type CartActionsType = ReturnType<typeof setTotalPriceAC> |
  ReturnType<typeof setNumbersAC> |
  ReturnType<typeof setCartAC> |
  ReturnType<typeof clearCartAC> |
  ReturnType<typeof setProductsIDAC>

interface ICart{
  products: IProduct[];
  numbers: null | number;
  totalPrice: null | number;
  productsID: Array<number>;
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
    productsID: [],
    numbers: null,
    totalPrice: 0
  }
}

const cartReducer = (state: IState = initialState, action: CartActionsType) => {
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
      if(state.cart.products.length === 0){
        return {...state, cart: {...state.cart, totalPrice: 0}}
      }
      const products: IProduct[] = state.cart.products;
      const totalPrice = products.reduce((prev: number, curr: IProduct) => {
        return prev + curr.price
      }, 0)
      return {...state, cart: {...state.cart, totalPrice}}
    }
    case CLEAR_CART: {
      return {...state, cart: {...state.cart, products: []}}
    }
    case "SET_PRODUCTS_ID": {
      return {...state,
      cart: {...state.cart, productsID: [...state.cart.productsID, action.id]}}
    }
    default: return state;
  }
}

export default cartReducer;

export const setCartAC = (data: IProduct) => ({type: SET_CART, data} as const);
export const setNumbersAC = () => ({type: SET_NUMBERS} as const);
export const clearCartAC = () => ({type: CLEAR_CART} as const);
export const setTotalPriceAC = () => ({type: SET_TOTAL_PRICE} as const);
export const setProductsIDAC = (id: number) => ({type: "SET_PRODUCTS_ID", id} as const);


export const addToCart = (id: number) => (dispatch: Dispatch<CartActionsType>) => {
  dispatch(setProductsIDAC(id));
  catalogAPI.getProduct(id).then(response => {
    dispatch(setCartAC(response));
    dispatch(setNumbersAC());
    dispatch(setTotalPriceAC());
  })
}

export const clearCart = () => (dispatch: Dispatch<CartActionsType>) => {
  dispatch(clearCartAC());
  dispatch(setNumbersAC());
  dispatch(setTotalPriceAC());
}