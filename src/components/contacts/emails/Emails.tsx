import React from 'react';


interface IProps {
  emails: Array<string>;
}

const Emails = (props: IProps) => {
  return(
    <div>
      {props.emails.map((email: string) => (
        <p key={email}>{email}</p>
      ))}
    </div>
  )
}

export default Emails;