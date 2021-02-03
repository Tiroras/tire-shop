import {ISelectItem} from "../../interfaces/catalog/ICatalog";


interface IState {
  disksName: string;
  tiresName: string;
  matsName: string;
  carGoodsName: string;
}

const SET_DISKS_INPUT="SET-DISKS-INPUT";
const SET_TIRES_INPUT="SET-TIRES-INPUT";
const SET_MATS_INPUT="SET-MASTS-INPUT";
const SET_CARGOODS_INPUT="SET-CARGOODS-INPUT"

const initialState: IState = {
  disksName: null,
  tiresName: null,
  matsName: null,
  carGoodsName: null
}

const catalogFormsReducer = (state: IState = initialState, action) => {
  switch (action.type) {
    case SET_DISKS_INPUT: {
      return {...state, disksName: action.value}
    }
    case SET_TIRES_INPUT: {
      return {...state, tiresName: action.value}
    }
    case SET_MATS_INPUT: {
      return {...state, matsName: action.value}
    }
    case SET_CARGOODS_INPUT: {
      return {...state, carGoodsName: action.value}
    }
    default: return state;
  }
}

export const setDisksInputAC = (value) => ({type: SET_DISKS_INPUT, value});
export const setTiresInputAC = (value) => ({type: SET_TIRES_INPUT, value});
export const setMatsInputAC = (value) => ({type: SET_MATS_INPUT, value});
export const setCarGoodsInputAC = (value) => ({type: SET_CARGOODS_INPUT, value});

export const setInput = (type, value) => (dispatch) => {
  debugger;
  switch (type) {
    case "disks": {
      dispatch(setDisksInputAC(value));
      break;
    }
    case "tires": {
      dispatch(setTiresInputAC(value));
      break;
    }
    case "mats": {
      dispatch(setMatsInputAC(value));
      break;
    }
    case "carGoods": {
      dispatch(setCarGoodsInputAC(value));
      break;
    }
    default: break;
  }
}

export default catalogFormsReducer;