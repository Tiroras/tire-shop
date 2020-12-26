export interface IList {
  productType: string;
  productTypeLink: string;
}

export interface ICatEl {
  sectionName: string;
  sectionLink: string;
  list: IList[];
}

export interface ICatalog {
  tires: ICatEl;
  disks: ICatEl;
  mats: ICatEl;
  carGoods: ICatEl;
}

export interface IServEl {
  sectionName: string;
  sectionLink: string;
}
