import React, {useEffect} from 'react';
import TiresCatalog from "./TiresCatalog";
import {connect} from "react-redux";
import {setTiresAC} from "../../../redux/products/products-reducer";
import {IProductData} from "../../../interfaces/catalog/ICatalog";
import {catalogAPI} from "../../../api/api";


interface IProps {
  data: IProductData[];
  type: string;
  setTiresAC: (type: string) => {type: string, data: IProductData[]};
}

const TiresCatalogContainer = (props: IProps) => {
  useEffect(() => {
    catalogAPI.getProducts(props.type).then(response => {
      props.setTiresAC(response);
    })
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

export default connect(mapStateToProps, {setTiresAC})(TiresCatalogContainer);

