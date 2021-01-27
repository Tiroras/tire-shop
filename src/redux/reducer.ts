import {combineReducers, createStore} from "redux";
import disksReducer from "./disks-reducer";
import NavReducer from "./nav-reducer";
import tiresReducer from "./tires-reducer";
import {reducer as formReducer} from "redux-form";
import contactsReducer from "./contacts-reducer";
import NewsReducer from "./news-reducer";
import withRedux, {createWrapper} from "next-redux-wrapper";


let reducer = combineReducers({
  navData: NavReducer,
  disksData: disksReducer,
  tiresData: tiresReducer,
  contactsData: contactsReducer,
  newsData: NewsReducer,
  form: formReducer,
});

let store = createStore(reducer);

export default store;