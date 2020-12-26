import React from 'react';


export const FormControl = ({input, meta, child, ...props}: any) => {
  const hasError = meta.touched && meta.error;
  return(
    <div>
      <div>
        {props.children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return(
    <FormControl>
      <input {...input} {...restProps} />
    </FormControl>
  )
}