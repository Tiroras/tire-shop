import {combineReducers, createStore} from "redux";
import disksReducer from "./forms/disks-reducer";
import NavReducer from "./nav-reducer";
import tiresReducer from "./forms/tires-reducer";
import {reducer as formReducer} from "redux-form";
import contactsReducer from "./contacts-reducer";
import NewsReducer from "./news-reducer";
import {createWrapper} from "next-redux-wrapper";
import productsReducer from "./products/products-reducer";

let reducer = combineReducers({
  navData: NavReducer,
  disksData: disksReducer,
  tiresData: tiresReducer,
  contactsData: contactsReducer,
  newsData: NewsReducer,
  productsData: productsReducer,
  form: formReducer,
});

const initStore = () => {
  return createStore(reducer)
}

export const wrapper = createWrapper(initStore)