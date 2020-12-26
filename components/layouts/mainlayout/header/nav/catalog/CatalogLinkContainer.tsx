import React from 'react'
import CatalogLink from "./CatalogLink";
import {connect} from "react-redux";
import {ICatalog} from "../../../../../../interfaces/reducers/INav";


interface IProps {
  catalog: ICatalog;
}

const CatalogLinkContainer = (props: IProps) => {
  return(
    <CatalogLink
      catalog={props.catalog}
    />
  )
}

let mapStateToProps = (state) => ({
  catalog: state.navData.catalog
})


export default connect(mapStateToProps)(CatalogLinkContainer)