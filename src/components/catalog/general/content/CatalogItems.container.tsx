import React from 'react';
import CatalogItems from "./CatalogItems";
import ThereNothing from "../../../general/ThereNothing";
import {IProductData} from "../../../../interfaces/catalog/ICatalog";



interface IProps {
  data: IProductData[];
}

const CatalogItemsContainer = (props: IProps) => {
  if(props.data === undefined || props.data.length === 0){
    return(
      <ThereNothing />
    )
  }

  return(
    <CatalogItems data={props.data} />
  )
}

export default CatalogItemsContainer;