import React from 'react';
import {connect} from "react-redux";
import TiresForm from "./TiresForm";
import {searchProductByName} from "../../../../redux/products/products-reducer";
import {useRouter} from "next/router";
import {catalogAPI} from "../../../../api/api";


const TiresFormContainer = (props) => {
  const router = useRouter();
  const handlerSubmit = (values) => {
    if(router.pathname === "/"){
      catalogAPI.getProducts("tires").then(() => {
        router.push("/catalog/tires")
      });
    }
    console.log(values.tireName)
    props.searchProductByName("tires", values.tireName)
  }

  return(
    <TiresForm
      onSubmit={handlerSubmit}
    />
  )
}


export default connect(null, {searchProductByName})(TiresFormContainer)