import React from 'react';
import CartItem from "./CartItem";
import styled from "styled-components";


interface IData{
  id: number;
  name: string;
  img: string;
  price: number;
  totalPrice: number;
}

interface IProps {
  data: IData[];
  clearCart: () => void;
  className?: string;
}

const Layout = styled.div`
  height: 800px;
  border: 2px solid #a9a9a9;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #a9a9a9;
`;

const Button = styled.button`
  width: 100%;
  border: 0;
  border-radius: 0;
  padding: 3vh 0;
  color: white;
  font-size: 4vh;
  background-color: #0a64a4;
`;

const CartItems = (props: IProps) => {
  return(
    <Layout className={props.className}>
      <div>
        {props.data.map((prop: IData) => (
          <CartItem
            key={prop.id}
            name={prop.name}
            img={prop.img}
            price={prop.price}
            totalPrice={prop.totalPrice}
          />
        ))}
      </div>
      <div>
        <Button
          className={props.className}
          onClick={props.clearCart}>
          Очистить корзину
        </Button>
      </div>
    </Layout>
  )
}

export default CartItems;