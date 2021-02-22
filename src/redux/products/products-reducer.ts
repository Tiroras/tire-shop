import {IProduct} from "../../interfaces/catalog/IProducts.type";
import {catalogAPI} from "../../api/api";
import {Dispatch} from "redux";


interface IProducts {
  disks: IProduct[];
  tires: IProduct[];
  mats: IProduct[];
  carGoods: IProduct[];
};

interface ITypes {
  disks: string;
  tires: string;
  mats: string;
  carGoods: string;
}

interface IState {
  readonly types: ITypes;
  products: IProducts;
}

export type ProductsActionsType = ReturnType<typeof setCarGoodsAC> |
  ReturnType<typeof setMatsAC> |
  ReturnType<typeof setDisksAC> |
  ReturnType<typeof setTiresAC>;

const SET_PRODUCTS_DISKS = "SET-PRODUCTS-DISKS";
const SET_PRODUCTS_TIRES = "SET-PRODUCTS-TIRES";
const SET_PRODUCTS_MATS = "SET-PRODUCTS-MATS";
const SET_PRODUCTS_CARGOODS = "SET-PRODUCTS-CARGOODS";

const disks = "disks";
const tires = "tires";
const mats = "mats";
const carGoods = "carGoods";

const initialState: IState = {
  types: {
    disks: disks,
    tires: tires,
    mats: mats,
    carGoods: carGoods
  },
  products: {
    disks: [],
    tires: [],
    mats: [],
    carGoods: [],
  }
}


const productsReducer = (state: IState = initialState, action: ProductsActionsType) => {
  switch (action.type) {
    case SET_PRODUCTS_CARGOODS: {
      return {...state, products: {...state.products, carGoods: action.data} }
    }
    case SET_PRODUCTS_MATS: {
      return {...state, products: {...state.products, mats: action.data} }
    }
    case SET_PRODUCTS_TIRES: {
      return {...state, products: {...state.products, tires: action.data} }
    }
    case SET_PRODUCTS_DISKS: {
      return {...state, products: {...state.products, disks: action.data} }
    }
    default: return state;
  }
}

export const setCarGoodsAC = (data) => ({type: SET_PRODUCTS_CARGOODS, data} as const);
export const setMatsAC = (data) => ({type: SET_PRODUCTS_MATS, data} as const);
export const setTiresAC = (data) => ({type: SET_PRODUCTS_TIRES, data} as const);
export const setDisksAC = (data) => ({type: SET_PRODUCTS_DISKS, data} as const);


export const getProducts = (type: string) => (dispatch) => {
  catalogAPI.getProducts(type).then(response => {
    switch (type) {
      case disks: {
        dispatch(setDisksAC(response));
        break;
      }
      case tires: {
        dispatch(setTiresAC(response));
        break;
      }
      case mats: {
        dispatch(setMatsAC(response));
        break;
      }
      case carGoods: {
        dispatch(setCarGoodsAC(response));
        break;
      }
      default: {
        dispatch(setCarGoodsAC(response));
        break;
      }
    }
  });
}

export const searchProductByName = (type: string, name: string) => (dispatch: Dispatch<ProductsActionsType>) => {
  catalogAPI.getProductByName(type, name).then(response => {
    switch (type) {
      case disks: {
        dispatch(setDisksAC(response));
        break;
      }
      case tires: {
        dispatch(setTiresAC(response));
        break;
      }
      case mats: {
        dispatch(setMatsAC(response));
        break;
      }
      case carGoods: {
        dispatch(setCarGoodsAC(response));
        break;
      }
      default: console.log("Something wrong"); break
    }
  })
}

export default productsReducer;