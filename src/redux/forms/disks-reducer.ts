import {ISelectItem} from "../../interfaces/catalog/ICatalog";


interface IState {
  disks: ISelectItem[];
}

let initialState: IState = {
  disks: [{
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
    list: ["0", "10", "16", "20", "21", "22", "23", "25", "27", "28", "29", "30", "31", "31,5", "32", "33", "34", "35",
      "36", "37", "37,5", "38", "39,5", "40", "41", "42", "43", "44", "45", "47", "47,5", "48", "48,5", "49", "50",
      "51", "52", "52,5", "53", "54", "55", "56", "57", "58", "62", "68","105", "106", "120", "133", "140", "165"],
  },
  {
    name: "сenterHoleDiameter",
    label: "Диаметр центрального отверстия",
    list: ["54,1", "56,0", "56,1", "56,4", "56,6", "56,7", "57,1", "58,1", "58,5", "58,6", "59", "60,1", "60,5",
      "63,3", "63,35", "63.4", "64,1", "65,1", "66,0", "66,1", "66,6", "67", "67.1", "69,1", "70,1", "70,2", "70,3",
      "71,1", "71,50", "72,5", "72,6", "73,1", "77,9", "78.1", "84,1","89,1", "92,5", "98,0", "98,5", "98,6", "100,1",
      "106,1", "108", "108,1", "108,5", "108,6", "110,1", "110,3", "130", "138.8", "163", "164", "221", "281"]
  },
  {
    name: "psd",
    label: "PCD",
    list: ["98", "100", "100/114,3", "105", "108", "110", "112", "114,3", "115", "118", "120", "127", "130", "139,7",
      "150", "160", "170", "180", "222,25", "275", "335"]
  },
  {
    name: "rimWidth",
    label: "Ширина обода",
    list: ["98", "100", "100/114,3", "105", "108", "110", "112", "114,3", "115", "118", "120", "127", "130", "139,7",
      "150", "160", "170", "180", "222,25", "275", "335"]
  },]
}

const disksReducer = (state: IState = initialState, action) => {
  return state;
}

export default disksReducer;