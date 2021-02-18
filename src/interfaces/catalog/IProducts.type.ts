export interface IProduct{
  id: number;
  type?: string;
  name: string;
  price: number;
  inStock: boolean;
  attributesID: number;
}

export interface IDisk extends IProduct {
  diameter: string
  seasonality: string,
  width: string,
  brand: string
}

// export interface IDisk extends IProduct{
//   readonly properties: IDiskProperties;
// }

export interface ITire extends IProduct{
  diameter: string;
  numberMountingHoles: string;
  departure: string;
  centerHoleDiameter: string;
  pcd: string;
  rimWidth: string;
}

// export interface ITire extends IProduct{
//   readonly properties: ITireProperties;
// }