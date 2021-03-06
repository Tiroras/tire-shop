import React from 'react';
import TiresFormContainer from "./form/TiresForm.container";
import CatalogItemsContainer from "../general/content/CatalogItems.container";
import {IProductData} from "../../../interfaces/catalog/ICatalog";


interface IProps {
  data: IProductData[];
}

const TiresCatalog = (props: IProps) => {
  return(
    <div>
      <div>
        <TiresFormContainer />
      </div>
      <CatalogItemsContainer data={props.data} />
    </div>
  )
}

export default TiresCatalog;