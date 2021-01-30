import React from "react";
import DisksFormContainer from "./form/DiskForm.container";
import CatalogItemsContainer from "../general/content/CatalogItems.container";
import {IProductData} from "../../../interfaces/catalog/ICatalog";


interface IProps {
  data: IProductData[];
}

const Disks = (props: IProps) => {
  return (
    <div>
      <div>
        <DisksFormContainer />
      </div>
      <CatalogItemsContainer data={props.data} />
    </div>
  )
}

export default Disks;