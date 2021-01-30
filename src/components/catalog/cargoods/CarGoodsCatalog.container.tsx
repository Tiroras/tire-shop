import {IProductData} from "../../../interfaces/catalog/ICatalog";
import React, {useEffect} from "react";
import {catalogAPI} from "../../../api/api";
import {connect} from "react-redux";
import {setCarGoodsAC} from "../../../redux/products/products-reducer";
import CarGoodsCatalog from "./CatGoodsCatalog";

interface IProps {
  data: IProductData[];
  type: string;
  setCarGoodsAC: (type: string) => {type: string, data: IProductData[]};
}

const CarGoodsCatalogContainer = (props: IProps) => {
  useEffect(() => {
    catalogAPI.getProducts(props.type).then(response => {
      props.setCarGoodsAC(response);
    })
  }, [])
  return(
    <CarGoodsCatalog
      data={props.data}
    />
  )
}

const mapStateToProps = (state) => ({
  type: state.productsData.types.carGoods,
  data: state.productsData.products.carGoods
})

export default connect(mapStateToProps, {setCarGoodsAC})(CarGoodsCatalogContainer)