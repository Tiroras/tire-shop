import React, {useEffect} from 'react';
import TiresCatalog from "./TiresCatalog";
import {connect} from "react-redux";
import {getProducts} from "../../../redux/products/products-reducer";
import {IProductData} from "../../../interfaces/catalog/ICatalog";
import {ReducerType} from "../../../redux/reducer";


interface IProps {
  data: IProductData[];
  type: string;
  getProducts: (type: string) => void;
}

const TiresCatalogContainer = (props: IProps) => {
  useEffect(() => {
    if(props.data.length === 0){
      props.getProducts(props.type)
    }
  }, []);

  return(
    <TiresCatalog
      data={props.data}
    />
  )
}

const mapStateToProps = (state: ReducerType) => ({
  type: state.productsData.types.tires,
  data: state.productsData.products.tires
})

export default connect(mapStateToProps, {getProducts})(TiresCatalogContainer);

