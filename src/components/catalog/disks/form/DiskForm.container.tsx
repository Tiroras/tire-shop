import React from 'react';
import {connect} from "react-redux";
import DisksForm from "./DisksForm";
import {searchProductByName} from "../../../../redux/products/products-reducer";
import {catalogAPI} from "../../../../api/api";
import {useRouter} from "next/router";


const DisksFormContainer = (props) => {
  const router = useRouter();
  const handlerSubmit = (values) => {
    if(router.pathname === "/"){
      catalogAPI.getProducts("disks").then(() => {
        router.push("/catalog/disks")
      });
    }
    console.log(values.diskName);
    props.searchProductByName("disks", values.diskName);
  }

  return(
    <DisksForm
      onSubmit={handlerSubmit}
    />
  )
}

export default connect(null, {searchProductByName})(DisksFormContainer);