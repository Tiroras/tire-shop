import React from 'react';
import ErrorValidateMessage from "./ErrorValidateMessage";


export const FormControl = ({input, meta: {touched, error}, children}) => {
  const hasError = touched && error;
  return(
    <div>
      <div>
        {children}
      </div>
      {hasError && <ErrorValidateMessage error={error} />}
    </div>
  )
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return(
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}

export const Select = (props) => {
  const {input, meta, child, ...restProps} = props;
  return(
    <FormControl {...props}>
      <select>
        {child}
      </select>
    </FormControl>
  )
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return(
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}