import React from 'react';
import {Select} from "../../../general/form/FormControls";
import {Field} from "redux-form";


interface IData {
  name: string;
  label: string;
  list: string[];
}

interface IProps {
  data: IData;
}

const CatalogSelect = (props: IProps) => {
  return(
    <>
      <label>{props.data.label}</label>
      <Field component="select" name={props.data.name}>
        <option />
        {props.data.list.map((prop) => (
          <option value={prop}>{prop}</option>
        ))}
      </Field>
    </>
  );
};

export default CatalogSelect;