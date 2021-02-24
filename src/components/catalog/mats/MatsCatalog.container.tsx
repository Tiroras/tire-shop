import React, {useEffect} from 'react'
import {IProductData} from "../../../interfaces/catalog/ICatalog";
import {connect} from "react-redux";
import {getProducts} from "../../../redux/products/products-reducer";
import MatsCatalog from "./MatsCatalog";
import {ReducerType} from "../../../redux/reducer";


interface IProps {
  data: IProductData[];
  type: string;
  getProducts: (type: string) => void;
}

const MatsCatalogContainer = (props: IProps) => {
  useEffect(() => {
    props.getProducts(props.type)
  }, [])
  return(
    <MatsCatalog
      data={props.data}
    />
  )
}

const mapStateToProps = (state: ReducerType) => ({
  type: state.productsData.types.mats,
  data: state.productsData.products.mats
})

export default connect(mapStateToProps, {getProducts})(MatsCatalogContainer)