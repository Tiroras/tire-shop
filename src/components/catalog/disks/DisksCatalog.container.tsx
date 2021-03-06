import {connect} from "react-redux";
import React, {useEffect} from "react";
import Disks from "./DisksCatalog";
import {IProductData} from "../../../interfaces/catalog/ICatalog";
import {getProducts} from "../../../redux/products/products-reducer";
import {ReducerType} from "../../../redux/reducer";


interface IProps {
  data: IProductData[];
  type: string;
  getProducts: (type: string) => void;
}

const DisksContainer = (props: IProps) => {
  useEffect(() => {
    if(props.data.length === 0){
      props.getProducts(props.type)
    }
  }, [])
  return(
    <Disks
      data={props.data}
    />
  )
}

const mapStateToProps = (state: ReducerType) => ({
    type: state.productsData.types.disks,
    data: state.productsData.products.disks
})

export default connect(mapStateToProps, {getProducts})(DisksContainer)