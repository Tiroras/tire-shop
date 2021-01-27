import React from 'react';
import TiresCatalog from "./TiresCatalog";
import {connect} from "react-redux";
import {ISelectItem} from "../../../interfaces/catalog/ICatalog";


const TiresCatalogContainer = (props) => {
  return(
    <TiresCatalog

    />
  )
}

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(TiresCatalogContainer);

