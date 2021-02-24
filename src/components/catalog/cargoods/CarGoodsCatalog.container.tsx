import {IProductData} from "../../../interfaces/catalog/ICatalog";
import React, {useEffect} from "react";
import {catalogAPI} from "../../../api/api";
import {connect} from "react-redux";
import {getProducts} from "../../../redux/products/products-reducer";
import CarGoodsCatalog from "./CatGoodsCatalog";
import {ReducerType} from "../../../redux/reducer";

interface IProps {
  data: IProductData[];
  type: string;
  getProducts: (type: string) => void;
}

const CarGoodsCatalogContainer = (props: IProps) => {
  useEffect(() => {
    props.getProducts(props.type)
  }, [])
  return(
    <CarGoodsCatalog
      data={props.data}
    />
  )
}

const mapStateToProps = (state: ReducerType) => ({
  type: state.productsData.types.carGoods,
  data: state.productsData.products.carGoods
})

export default connect(mapStateToProps, {getProducts})(CarGoodsCatalogContainer)