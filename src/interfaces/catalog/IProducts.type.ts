export interface IProduct{
  readonly id: number;
  readonly type?: string;
  readonly name: string;
  readonly price: number;
  inStock: boolean;
}

export interface IDiskProperties  {
  readonly diameter: string
  readonly seasonality: string,
  readonly width: string,
  readonly brand: string
}

export interface IDisk extends IProduct{
  readonly properties: IDiskProperties;
}

export interface ITireProperties{
  readonly diameter: string;
  readonly numberMountingHoles: string;
  readonly departure: string;
  readonly centerHoleDiameter: string;
  readonly pcd: string;
  readonly rimWidth: string;
}

export interface ITire extends IProduct{
  readonly properties: ITireProperties;
}