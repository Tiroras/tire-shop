import React from 'react';
import {ISelectItem} from "../../../../interfaces/catalog/ICatalog";
import {connect} from "react-redux";
import CatalogForm from "../../general/form/CatalogForm";


interface IProps {
  data: ISelectItem[];
}

const TiresFormContainer = (props: IProps) => {
  return(
    <CatalogForm data={props.data} />
  )
}

let mapStateToProps = (state) => ({
  data: state.tiresData.tires
})

export default connect(mapStateToProps)(TiresFormContainer)