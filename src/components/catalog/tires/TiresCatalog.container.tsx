import React, {useEffect} from 'react';
import TiresCatalog from "./TiresCatalog";
import {connect} from "react-redux";
import {getProducts, setTiresAC} from "../../../redux/products/products-reducer";
import {IProductData} from "../../../interfaces/catalog/ICatalog";
import {catalogAPI} from "../../../api/api";


interface IProps {
  data: IProductData[];
  type: string;
  getProducts: (type: string) => void;
}

const TiresCatalogContainer = (props: IProps) => {
  useEffect(() => {
    props.getProducts(props.type)
  }, [])
  return(
    <TiresCatalog
      data={props.data}
    />
  )
}

const mapStateToProps = (state) => ({
  type: state.productsData.types.tires,
  data: state.productsData.products.tires
})

export default connect(mapStateToProps, {getProducts})(TiresCatalogContainer);

