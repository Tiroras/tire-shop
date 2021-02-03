import React from 'react';
import {ISelectItem} from "../../../../interfaces/catalog/ICatalog";
import {connect} from "react-redux";
import CatalogForm from "../../general/form/CatalogForm";
import {reduxForm} from "redux-form";


interface IProps {
  data: ISelectItem[];
}

const TiresFormContainer = (props: any) => {
  return(
    <CatalogForm
      data={props.data}
      input={props.input}
    />
  )
}

let mapStateToProps = (state) => ({
  data: state.catFormsData.forms.tires.selectItems,
  input: state.catFormsData.forms.tires.input
})

const TiresSearch = reduxForm({form: "searchTiresForm"})(TiresFormContainer)

export default connect(mapStateToProps)(TiresSearch)