import React from 'react';
import Catalog from "./Catalog";
import {connect} from "react-redux";
import {ICatalog} from "../../interfaces/reducers/INav";
import {ReducerType} from "../../redux/reducer";


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

let mapStateToProps = (state: ReducerType) => ({
  data: state.navData.catalog
});

export default connect(mapStateToProps)(CatalogContainer);