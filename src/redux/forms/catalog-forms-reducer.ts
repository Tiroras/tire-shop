import {ISelectItem} from "../../interfaces/catalog/ICatalog";

interface IForm{
  input: string;
  selectItems: ISelectItem[];
}

interface IForms{
  disks: IForm;
  tires: IForm;
  mats: IForm;
  carGoods: IForm;
}

interface IState{
  forms: IForms;
}

const CHANGE_INPUT="CHANGE-INPUT";
const SET_INPUT="SET-INPUT"

const initialState: IState = {
  forms: {
    disks: {
      input: "",
      selectItems: [
        {
          name: "diameter",
          label: "Диаметр",
          list: ["12", "13", "14", "15", "16", "17", "17,5", "18", "19", "19,5", "20", "22,5"],
        },
        {
          name: "numberMountingHoles",
          label: "Количество крепежных отверстий",
          list: ["3", "4", "5", "6", "8", "10"],
        },
        {
          name: "departure",
          label: "Вылет",
          list: ["0", "10", "16", "20", "21", "22", "23", "25", "27", "28", "29", "30", "31", "31,5", "32", "33",
            "34", "35", "36", "37", "37,5", "38", "39,5", "40", "41", "42", "43", "44", "45", "47", "47,5", "48",
            "48,5", "49", "50", "51", "52", "52,5", "53", "54", "55", "56", "57", "58", "62", "68","105", "106",
            "120", "133", "140", "165"],
        },
        {
          name: "сenterHoleDiameter",
          label: "Диаметр центрального отверстия",
          list: ["54,1", "56,0", "56,1", "56,4", "56,6", "56,7", "57,1", "58,1", "58,5", "58,6", "59", "60,1", "60,5",
            "63,3", "63,35", "63.4", "64,1", "65,1", "66,0", "66,1", "66,6", "67", "67.1", "69,1", "70,1",
            "70,2", "70,3", "71,1", "71,50", "72,5", "72,6", "73,1", "77,9", "78.1", "84,1","89,1", "92,5", "98,0",
            "98,5", "98,6", "100,1", "106,1", "108", "108,1", "108,5", "108,6", "110,1", "110,3", "130", "138.8",
            "163", "164", "221", "281"]
        },
        {
          name: "psd",
          label: "PCD",
          list: ["98", "100", "100/114,3", "105", "108", "110", "112", "114,3", "115", "118", "120",
            "127", "130", "139,7", "150", "160", "170", "180", "222,25", "275", "335"]
        },
        {
          name: "rimWidth",
          label: "Ширина обода",
          list: ["98", "100", "100/114,3", "105", "108", "110", "112", "114,3", "115", "118", "120",
            "127", "130", "139,7", "150", "160", "170", "180", "222,25", "275", "335"]
        }
      ]
    },
    tires: {
      input: "",
      selectItems: [
        {
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
          list:["5.00", "6.00", "6.50", "7.00", "7.50", "8.25", "9.00", "9.5", "10.00", "10", "10.5", "11.00",
            "11.2", "12.00", "12", "135", "145", "155", "165", "175", "185", "195", "205", "215", "225", "235",
            "245", "255", "265", "275", "285", "295", "315", "325", "385"],
        },
        {
          name: "brand",
          label: "Брэнд",
          list: ["Aeolus", "Altenzo", "Amtel", "Aplus", "Armour", "Barum", "BFGoodrich", "Bontyre", "Bridgestone",
            "Continental", "Cordiant", "Doublestar", "Dunlop", "Forward", "Gislaved", "Good Year", "Hankook",
            "Kapsen", "kenda", "Kumho", "Laufenn", "Marshal", "Matador", "Maxxis", "Mazzini", "Michelin", "Nexen",
            "NITTO", "Nokian", "Nordman", "Ovation", "Pirelli", "PROFIL", "Roadstone", "Sailun", "Satoya", "Sava",
            "Tigar", "Toyo", "Triangle", "Tunga", "Tyrex", "Viatt", "Westlake", "WINRUN", "Yokohama", "АШК", "БелШина",
            "БрШЗ", "Кама", "КШЗ", "Свердловск", "УШЗ", "ЯШЗ"]
        }
      ]
    },
    mats: {
      input: "",
      selectItems: []
    },
    carGoods: {
      input: "",
      selectItems: []
    },
  }
}

const catalogFormsReducer = (state: IState = initialState, action) => {
  switch (action.type) {
    case SET_INPUT: {
      return {...state,
        forms: {...state.forms,
          [action.type]: {...state.forms[action.type],
            input: action.value}}}
    }
  }
  return state;
}

export const setInputAC = (type, value) => ({type: SET_INPUT, value})

export default catalogFormsReducer;