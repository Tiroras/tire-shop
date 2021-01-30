import React from 'react';
import CatalogItemsContainer from "../general/content/CatalogItems.container";
import {IProductData} from "../../../interfaces/catalog/ICatalog";


interface IProps {
  data: IProductData[];
}

const MatsCatalog = (props: IProps) => {
  return(
    <div>
      <CatalogItemsContainer data={props.data} />
    </div>
  )
}

export default MatsCatalog;