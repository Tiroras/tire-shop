

const initialState = {
  numbers: [
    "60 21 53",
    "53 53 21",
    "8 934 535 43 32",
    "8 953 425 53 21",
    "8 963 214 63 11"
  ],
  emails: [
    "shiva@salon.ru",
    "shiwa@true.salon.ru",
    "shisa@ne.salon.ru"
  ]
}

type TState = typeof initialState;

const CompanyInfoReducer = (state: TState = initialState) => {
  return state;
}

export default CompanyInfoReducer;