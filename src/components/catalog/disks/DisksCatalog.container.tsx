import {connect} from "react-redux";
import React, {useEffect} from "react";
import Disks from "./DisksCatalog";
import {IProductData} from "../../../interfaces/catalog/ICatalog";
import {catalogAPI} from "../../../api/api";
import {setDisksAC} from "../../../redux/products/products-reducer";


interface IProps {
  data: IProductData[];
  type: string;
  setDisksAC: (type: string) => {type: string, data: IProductData[]};
}

const DisksContainer = (props: IProps) => {
  useEffect(() => {
    catalogAPI.getProducts(props.type).then(response => {
      props.setDisksAC(response);
    })
  }, [])
  return(
    <Disks
      data={props.data}
    />
  )
}

const mapStateToProps = (state) => ({
    type: state.productsData.types.disks,
    data: state.productsData.products.disks
})

export default connect(mapStateToProps, {setDisksAC})(DisksContainer)