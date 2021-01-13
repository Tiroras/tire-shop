import React from 'react';
import {Input} from "../../../general/form/FormControls";
import {Field, reduxForm } from "redux-form";
import {required} from "../../../../utility/validators/validators";
import styled from "styled-components";


const FormLayout = styled.form`
  div{
    margin: 1vh 0;
  }
`;

const AgreeBlock = styled.div`
  display: flex;
  align-items: baseline;
`;

const Button = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: #ff9540;
  color: white;
  padding: 1vh 2vw;
`

const SearchFeedbackForm: React.FC = (props: any) => {
  return(
    <FormLayout onSubmit={props.handleSubmit} >
      <div>
        <Field
          component={Input}
          placeholder={"Введите ваше имя"}
          name={"name"}
          id={"name"}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          component={Input}
          placeholder={"Введие вашу почту"}
          name={"email"}
          id={"email"}
          validate={[required]}
        />
      </div>
      <AgreeBlock>
        <Field
          component={Input}
          type={"checkbox"}
          name={"agree"}
          id={"agree"}
          validate={[required]}
        />
        <label htmlFor={"agree"}>
          Я согласен на обработку персональных данных
        </label>
      </AgreeBlock>
      <div>
        <Button>Отправить</Button>
      </div>
    </FormLayout>
  )
}

const SearchFeedbackReduxForm = reduxForm({form: "searchFeedbackForm"})(SearchFeedbackForm);

export default SearchFeedbackReduxForm;