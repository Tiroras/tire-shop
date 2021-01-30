interface IProduct{
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

interface IDisk extends IProduct{
  diameter: string
  seasonality: string,
  width: string,
  brand: string
}

interface ITire extends IProduct{
  diameter: string;
  numberMountingHoles: string;
  departure: string;
  centerHoleDiameter: string;
  pcd: string;
  rimWidth: string;
}

interface IProducts {
  disks: IDisk[];
  tires: ITire[];
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
  types: ITypes;
  products: IProducts;
}

const SET_PRODUCTS_DISKS = "SET-PRODUCTS-DISKS";
const SET_PRODUCTS_TIRES = "SET-PRODUCTS-TIRES";
const SET_PRODUCTS_MATS = "SET-PRODUCTS-MATS";
const SET_PRODUCTS_CARGOODS = "SET-PRODUCTS-CARGOODS";

const initialState: IState = {
  types: {
    disks: "disks",
    tires: "tires",
    mats: "mats",
    carGoods: "carGoods"
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

export default productsReducer;