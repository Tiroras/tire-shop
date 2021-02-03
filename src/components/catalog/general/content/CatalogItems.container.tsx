import React from 'react';
import CatalogItems from "./CatalogItems";
import ThereNothing from "../../../general/ThereNothing";
import {IProductData} from "../../../../interfaces/catalog/ICatalog";
import {connect} from "react-redux";
import {addToCart} from "../../../../redux/products/cart-reducer";



interface IProps {
  data: IProductData[];
  addToCart: (id: number) => void;
}

const CatalogItemsContainer = (props: IProps) => {
  if(props.data === undefined || props.data.length === 0){
    return(
      <ThereNothing />
    )
  }

  return(
    <CatalogItems
      data={props.data}
      addToCart={props.addToCart}
    />
  )
}

export default connect(null, {addToCart})(CatalogItemsContainer);