import {combineReducers, createStore} from "redux";
import disksReducer from "./disks-reducer";
import NavReducer from "./nav-reducer";
import tiresReducer from "./tires-reducer";


let reducer = combineReducers({
  navData: NavReducer,
  disksData: disksReducer,
  tiresData: tiresReducer
});

let store = createStore(reducer);


export default store;