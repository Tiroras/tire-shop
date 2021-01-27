import {ICatalog, IServEl} from "../interfaces/reducers/INav";


interface IState {
  catalog: ICatalog;
  services: IServEl[];
}

let initialState: IState = {
  catalog: {
    tires: {
      sectionName: "Шины",
      sectionLink: "/catalog/tires",
      list: [
        {productType: "Сельхоз машина", productTypeLink: "/catalog/tires/agricultural-machine"},
        {productType: "Грузовая авторезина", productTypeLink: "/catalog/tires/agricultural-machine"},
        {productType: "Зимняя авторезина", productTypeLink: "/catalog/tires/agricultural-machine"},
        {productType: "Летняя авторезина", productTypeLink: "/catalog/tires/agricultural-machine"},
        {productType: "Квадрошины", productTypeLink: "/catalog/tires/agricultural-machine"}
      ]
    },

    disks: {
      sectionName: "Диски",
      sectionLink: "/catalog/disks",
      list: [
        {productType: "Диски литые", productTypeLink: "/catalog/disks/alloy-disks"},
        {productType: "Диски штампованные", productTypeLink: "/catalog/disks/stamped-disks"}
      ]
    },

    mats: {
      sectionName: "Коврики",
      sectionLink: "/catalog/mats",
      list: [
        {productType: "Ковриг багажный", productTypeLink: "/catalog/mats/luggage-mats"},
        {productType: "Коврик в салон", productTypeLink: "/catalog/mats/car-mats"}
      ]
    },

    carGoods: {
      sectionName: "Разное",
      sectionLink: "/catalog/cargoods",
      list: [
        {productType: "Мотомасла", productTypeLink: "/catalog/cargoods/moto-oils"},
        {productType: "Инструмент", productTypeLink: "/catalog/cargoods/tools"},
        {productType: "Аксессуары", productTypeLink: "/catalog/cargoods/accessories"},
        {productType: "Тосол", productTypeLink: "/catalog/cargoods/antifreeze"},
        {productType: "Ароматизаторы", productTypeLink: "/catalog/cargoods/flavorings"},
        {productType: "Щетки стеклоочистителя", productTypeLink: "/catalog/cargoods/wiper-blades"},
        {productType: "Автомасла", productTypeLink: "/catalog/cargoods/car-oils"},
        {productType: "Автоодеяло", productTypeLink: "/catalog/cargoods/auto-blanket"},
        {productType: "Автохимия", productTypeLink: "/catalog/cargoods/auto-сhemicals"},
        {productType: "Фильтра", productTypeLink: "/catalog/cargoods/filters"},
        {productType: "Датчики давления", productTypeLink: "/catalog/cargoods/pressure-sensors"},
        {productType: "Защита двигателя", productTypeLink: "/catalog/cargoods/engine-protection"},
        {productType: "Зап. части", productTypeLink: "/catalog/cargoods/spare-parts"},
        {productType: "Тормозные колодки", productTypeLink: "/catalog/cargoods/brake-pads"}
      ]
    }
  },
  services: [
    {sectionName: "Сезонное хранение", sectionLink: "/services/season-storage"},
    {sectionName: "Правка дисков", sectionLink: "/services/disc-straightening"},
    {sectionName: "Ремонт шин", sectionLink: "/services/tier-repair"},
    {sectionName: "Шиномонтаж", sectionLink: "/services/tire-fitting"}
  ]
}

const NavReducer = (state: IState = initialState) => {
  return state;
}

export default NavReducer;