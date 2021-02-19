import React from 'react';
import {Field, reduxForm} from "redux-form";
import {IContacts} from "../../../interfaces/reducers/IContacts";
import {Input, Textarea} from "../../general/form/FormControls";
import styled from "styled-components";


interface IProps {
  data: IContacts
}

const Message = styled(Textarea)`
  resize: none;
  height: 15vh;
  width: 25vw;
  border-radius: 5px;
  padding: 0.5vw;
`;

const FormBlock = styled.div`
  margin: 1.5vh 0;
  Input{
    padding: 0.5vw;
    border-radius: 5px;
    border: 1px solid gray;
  }
`;

const Button = styled.button`
  color:white;
  background-color: #3e94d1;
  padding: 2vh 3vw;
  border: 2px solid #a9a9a9;
  border-radius: 10px;
  font-weight: bold;
`;

const FeedbackForm = (props) => {
  return(
    <form>
      <FormBlock className={props.className}>
        <Field
          name={"email"}
          id={"email"}
          component={Input}
          type={"email"}
          placeholder={"Введите почту"}
        />
      </FormBlock>
      <FormBlock className={props.className}>
        <Field
          name={"userName"}
          id={"userName"}
          component={Input}
          placeholder={"Введите имя"}
        />
      </FormBlock>
      <FormBlock className={props.className}>
        <Field
          name={"number"}
          id={"number"}
          component={Input}
          placeholder={"Введите номер телефона"}
        />
      </FormBlock>
      <FormBlock className={props.className}>
        <Field
          name={"message"}
          id={"message"}
          component={Message}
          placeholder={"Введите сообщение"}
        />
      </FormBlock>
      <FormBlock className={props.className}>
        <Button className={props.className}>
          Отправить
        </Button>
      </FormBlock>
    </form>
  )
}


const FeedbackReduxForm = reduxForm({form: "feedbackForm"})(FeedbackForm);

export default FeedbackReduxForm;