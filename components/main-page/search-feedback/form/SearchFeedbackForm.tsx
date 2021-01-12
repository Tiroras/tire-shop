import React from 'react';
import {Input} from "../../../general/form/FormControls";
import {Field, reduxForm } from "redux-form";
import {required} from "../../../../utility/validators/validators";


const SearchFeedbackForm: React.FC = (props: any) => {
  return(
    <form onSubmit={props.handleSubmit} >
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
      <div>
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
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  )
}

const SearchFeedbackReduxForm = reduxForm({form: "searchFeedbackForm"})(SearchFeedbackForm)

export default SearchFeedbackReduxForm;