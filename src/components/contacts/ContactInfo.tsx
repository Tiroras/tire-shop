import React from 'react'
import NumbersContainer from "./numbers/Numbers.container";
import EmailsContainer from "./emails/Emails.container";


const ContactInfo = () => {
  return(
    <div>
      <div>
        <div>
          <h3>Наши адреса</h3>
        </div>
        <div>
          г.Ижевск, ул.Топорова, 99
        </div>
      </div>
      <div>
        <div>
          <h3>Наши телефоны</h3>
        </div>
        <NumbersContainer />
      </div>
      <div>
        <div>
          <h3>E-mail</h3>
        </div>
        <EmailsContainer />
      </div>
      <div>
        <div>
          <h3>Режим работы</h3>
        </div>
        <div>
          Пн.-Пт. с 8.00 до 20.00
          <br />
          Сб. с 8.30 до 19.00
          <br />
          Вс. с 8.30 до 18.00
        </div>
      </div>
    </div>
  )
}

export default ContactInfo;