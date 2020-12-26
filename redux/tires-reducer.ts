import {ISelectItem} from "../interfaces/catalog/ICatalog";


interface IState {
  tires: ISelectItem[];
}

let initialState: IState = {
  tires: [{
    name: "diameter",
    label: "Диаметр",
    list: ["10", "12", "13C", "13", "14C", "14", "15", "15C", "16",
      "16,5", "16C", "17", "17,5", "17C", "18", "19", "19,5", "20", "21", "22,5"],
  },
  {
    name: "seasonality",
    label: "Сезонность",
    list: ["Всесезоннная", "Зимняя", "Летняя"],
  },
  {
    name: "width",
    label: "Ширина",
    list:["5.00", "6.00", "6.50", "7.00", "7.50", "8.25", "9.00", "9.5", "10.00", "10", "10.5", "11.00", "11.2", "12.00", "12", "135", "145", "155", "165",
      "175", "185", "195", "205", "215", "225", "235", "245", "255", "265", "275", "285", "295", "315", "325", "385"],
  },
  {
    name: "brand",
    label: "Брэнд",
    list: ["Aeolus", "Altenzo", "Amtel", "Aplus", "Armour", "Barum", "BFGoodrich", "Bontyre", "Bridgestone",
      "Continental", "Cordiant", "Doublestar", "Dunlop", "Forward", "Gislaved", "Good Year", "Hankook", "Kapsen",
      "kenda", "Kumho", "Laufenn", "Marshal", "Matador", "Maxxis", "Mazzini", "Michelin", "Nexen", "NITTO", "Nokian",
      "Nordman", "Ovation", "Pirelli", "PROFIL", "Roadstone", "Sailun", "Satoya", "Sava", "Tigar", "Toyo", "Triangle",
      "Tunga", "Tyrex", "Viatt", "Westlake", "WINRUN", "Yokohama", "АШК", "БелШина", "БрШЗ", "Кама", "КШЗ", "Свердловск",
      "УШЗ", "ЯШЗ"]
  }]
}

const tiresReducer = (state: IState = initialState, action) => {
  return state;
}

export default tiresReducer;