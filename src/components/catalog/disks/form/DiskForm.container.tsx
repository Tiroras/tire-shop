import React from 'react';
import {ISelectItem} from "../../../../interfaces/catalog/ICatalog";
import {connect} from "react-redux";
import CatalogForm from "../../general/form/CatalogForm";
import {reduxForm} from "redux-form";


interface IState {
  data: ISelectItem[];
}

const DisksFormContainer = (props: any) => {
  return(
    <CatalogForm data={props.data} />
  )
}

let mapStateToProps = (state) => ({
  data: state.disksData.disks
})

const DisksSearch = reduxForm({form: "searchDisksForm"})(DisksFormContainer)

export default connect(mapStateToProps)(DisksSearch);