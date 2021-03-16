import {applyMiddleware, combineReducers, createStore} from "redux";
import disksReducer from "./forms/disks-reducer";
import NavReducer from "./nav-reducer";
import tiresReducer from "./forms/tires-reducer";
import {reducer as formReducer} from "redux-form";
import contactsReducer from "./contacts-reducer";
import NewsReducer from "./news-reducer";
import {createWrapper} from "next-redux-wrapper";
import productsReducer from "./products/products-reducer";
import cartReducer from "./products/cart-reducer";
import thunkMiddleware from "redux-thunk"
import catalogFormsReducer from "./forms/catalog-forms-reducer";
import CompanyInfoReducer from "./numbers-reducer";

let reducer = combineReducers({
  navData: NavReducer,
  disksData: disksReducer,
  tiresData: tiresReducer,
  catFormsData: catalogFormsReducer,
  contactsData: contactsReducer,
  newsData: NewsReducer,
  productsData: productsReducer,
  cartData: cartReducer,
  CompanyInfoData: CompanyInfoReducer,
  form: formReducer,
});

export type ReducerType = ReturnType<typeof reducer>

const initStore = () => {
  return createStore(reducer, applyMiddleware(thunkMiddleware))
}

const wrapper = createWrapper(initStore)
export default wrapper;