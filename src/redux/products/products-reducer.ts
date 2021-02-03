import {IDisk, IProduct, ITire} from "../../interfaces/catalog/IProducts.type";
import {catalogAPI} from "../../api/api";


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


const productsReducer = (state: IState = initialState, action) => {
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

export const setCarGoodsAC = (data) => ({type: SET_PRODUCTS_CARGOODS, data});
export const setMatsAC = (data) => ({type: SET_PRODUCTS_MATS, data});
export const setTiresAC = (data) => ({type: SET_PRODUCTS_TIRES, data});
export const setDisksAC = (data) => ({type: SET_PRODUCTS_DISKS, data});


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

export const searchProductByName = (type: string, name: string) => (dispatch) => {
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