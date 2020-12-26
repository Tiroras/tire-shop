import React from 'react';


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
      <select name={props.data.name}>
        <option />
        {props.data.list.map((prop) => (
          <option value={prop}>{prop}</option>
        ))}
      </select>
    </>
  );
};

export default CatalogSelect;