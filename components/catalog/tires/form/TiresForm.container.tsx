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
    <CatalogForm data={props.data} />
  )
}

let mapStateToProps = (state) => ({
  data: state.tiresData.tires
})

const TiresSearch = reduxForm({form: "searchFeedbackForm"})(TiresFormContainer)

export default connect(mapStateToProps)(TiresSearch)