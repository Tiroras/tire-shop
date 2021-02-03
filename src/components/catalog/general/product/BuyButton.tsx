import React from 'react';


interface IProps {
  id: number;
  sendToCart: () => any;
}

const BuyButton = (props: IProps) => {
  return(
    <div className={"buyBlock"}>
      <span>
        <button onClick={props.sendToCart}>
          В корзину
        </button>
      </span>
    </div>
  )
}

export default BuyButton;