export interface ISelectItem {
  name: string;
  label: string;
  list: string[];
}

export interface IProductData {
  id: number;
  name: string;
  img: string;
  inStock: boolean;
  price: number;
}