import React from 'react';
import {ISelectItem} from "../../../../interfaces/catalog/ICatalog";
import {connect} from "react-redux";
import CatalogForm from "../../general/form/CatalogForm";
import {reduxForm} from "redux-form";


interface IState {
  data: ISelectItem[];
  input: string;
}

const DisksFormContainer = (props) => {
  return(
    <CatalogForm
      data={props.data}
      input={props.input}
    />
  )
}

let mapStateToProps = (state) => ({
  data: state.catFormsData.forms.disks.selectItems,
  input: state.catFormsData.forms.disks.input
})

const DisksSearch = reduxForm({form: "searchDisksForm"})(DisksFormContainer)

export default connect(mapStateToProps)(DisksSearch);