import React from 'react'
import CatalogSelect from "./CatalogSelect";
import {ISelectItem} from "../../../../interfaces/catalog/ICatalog";
import styled from "styled-components";


interface IProps {
  data: ISelectItem[];
}

const FormBlock = styled.form`
  background-color: #3e94d1;
  color: white;
  display: flex;
  flex-direction: column;
  margin: 6vh 0;
  padding: 4vh 3vw;
  border: 2px solid #a9a9a9;
  border-radius:10px;
  width: 20%;
`
const Button = styled.button`
  margin-top: 2vh;
  color: white;
  background-color: #ff9540;
  border-radius: 5px;
  border: 0;
  padding: 1vh 2vw;
`

const CatalogForm = (props: IProps) => {
  return(
    <FormBlock>
      {props.data.map((prop) => (
        <CatalogSelect data={prop} key={prop.name} />
      ))}
      <Button type={"submit"}>
        Найти
      </Button>
    </FormBlock>
  )
}

export default CatalogForm;