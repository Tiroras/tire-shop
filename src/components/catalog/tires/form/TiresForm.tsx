import React from 'react';
import {reduxForm, Field} from "redux-form";
import styled from "styled-components";
import {Input} from "../../../general/form/FormControls";
import {maxLengthCreator} from "../../../../utility/validators/validators";


const FormBlock = styled.div`
  background-color: #3e94d1;
  color: white;
  display: flex;
  flex-direction: column;
  margin: 6vh auto;
  padding: 4vh 3vw;
  border: 2px solid #a9a9a9;
  border-radius:10px;
  width: 410px;
`;
const StyledInput = styled(Input)`
  width: 100%;
`;

const MaxLength = maxLengthCreator(40);

const TiresForm = (props) => {
  return(
    <FormBlock
      className={props.className}
      onSubmit={props.handleSubmit}>
      <Field
        name={"tiresName"}
        id={"tiresName"}
        component={StyledInput}
        placeholder={"Поиск"}
        validate={[MaxLength]}
      />
      <button>
        Найти
      </button>
    </FormBlock>
  )
}

export default reduxForm({form: "tiresSearch"})(TiresForm);