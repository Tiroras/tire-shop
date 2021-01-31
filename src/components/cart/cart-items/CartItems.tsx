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
}

const Layout = styled.div`
  height: 800px;
  border: 2px solid #a9a9a9;
`;

const CartItems = (props: IProps) => {
  return(
    <Layout>
      {props.data.map((prop: IData) => (
        <CartItem
          key={prop.id}
          name={prop.name}
          img={prop.img}
          price={prop.price}
          totalPrice={prop.totalPrice}
        />
      ))}
    </Layout>
  )
}

export default CartItems;