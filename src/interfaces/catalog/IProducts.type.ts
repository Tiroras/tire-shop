export interface IProduct{
  readonly id: number;
  readonly type?: string;
  readonly name: string;
  readonly price: number;
  inStock: boolean;
  readonly attributesID: number;
}

export interface IDisk extends IProduct {
  readonly diameter: string
  readonly seasonality: string,
  readonly width: string,
  readonly brand: string
}

// export interface IDisk extends IProduct{
//   readonly properties: IDiskProperties;
// }

export interface ITire extends IProduct{
  readonly diameter: string;
  readonly numberMountingHoles: string;
  readonly departure: string;
  readonly centerHoleDiameter: string;
  readonly pcd: string;
  readonly rimWidth: string;
}

// export interface ITire extends IProduct{
//   readonly properties: ITireProperties;
// }