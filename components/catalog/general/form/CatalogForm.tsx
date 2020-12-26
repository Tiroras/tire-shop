import React from 'react'
import CatalogSelect from "./CatalogSelect";
import {ISelectItem} from "../../../../interfaces/catalog/ICatalog";


interface IProps {
  data: ISelectItem[];
}

const CatalogForm = (props: IProps) => {
  return(
    <form>
      {props.data.map((prop) => (
        <CatalogSelect data={prop} />
      ))}
      <button type={"submit"}>
        Найти
      </button>
    </form>
  )
}

export default CatalogForm;