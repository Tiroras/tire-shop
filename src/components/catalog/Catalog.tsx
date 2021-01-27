import React from 'react';
import {ICatalog} from "../../interfaces/reducers/INav";
import CatalogTabs from "./CatalogTabs";


interface IProps {
  data: ICatalog;
}

const Catalog = (props: IProps) => {
  return(
    <div>
      <CatalogTabs data={props.data} />
    </div>
  )
}

export default Catalog;