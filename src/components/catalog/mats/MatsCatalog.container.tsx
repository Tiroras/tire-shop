import React, {useEffect} from 'react'
import {IProductData} from "../../../interfaces/catalog/ICatalog";
import {catalogAPI} from "../../../api/api";
import {connect} from "react-redux";
import {setMatsAC} from "../../../redux/products/products-reducer";
import MatsCatalog from "./MatsCatalog";


interface IProps {
  data: IProductData[];
  type: string;
  setMatsAC: (type: string) => {type: string, data: IProductData[]};
}

const MatsCatalogContainer = (props: IProps) => {
  useEffect(() => {
    catalogAPI.getProducts(props.type).then(response => {
      props.setMatsAC(response);
    })
  }, [])
  return(
    <MatsCatalog
      data={props.data}
    />
  )
}

const mapStateToProps = (state) => ({
  type: state.productsData.types.mats,
  data: state.productsData.products.mats
})

export default connect(mapStateToProps, {setMatsAC})(MatsCatalogContainer)