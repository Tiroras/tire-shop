import React from 'react';
import {ISelectItem} from "../../../../interfaces/catalog/ICatalog";
import {connect} from "react-redux";
import CatalogForm from "../../general/form/CatalogForm";


interface IState {
  data: ISelectItem[];
}

const DisksFormContainer = (props: IState) => {
  return(
    <CatalogForm data={props.data} />
  )
}

let mapStateToProps = (state) => ({
  data: state.disksData.disks
})

export default connect(mapStateToProps)(DisksFormContainer);