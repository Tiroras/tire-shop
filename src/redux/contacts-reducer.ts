import {IContacts} from "../interfaces/reducers/IContacts";
import {placeholder} from "@babel/types";


interface IState {
  contacts: IContacts;
}

let initialState: IState = {
  contacts: {
    formData: [
      {name: "email", placeholder: "Введите почту"},
      {name: "userName", placeholder: "Введите имя"},
      {name: "number", placeholder: "Введите номер телефона"},
      // {name: "message", placeholder: "Введите сообщение"},
    ]
  }
}

const contactsReducer = (state: IState = initialState) => {
  return state;
}

export default contactsReducer;