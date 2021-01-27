import React from 'react';
import Catalog from "./Catalog";
import {connect} from "react-redux";
import {ICatalog} from "../../interfaces/reducers/INav";


interface IState {
  data: ICatalog;
}

const CatalogContainer = (state: IState) => {
  return(
    <Catalog
      data={state.data}
    />
  )
}

let mapStateToProps = (state) => ({
  data: state.navData.catalog
});

export default connect(mapStateToProps)(CatalogContainer);