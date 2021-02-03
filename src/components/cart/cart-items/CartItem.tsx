import React from 'react';
import CounterContainer from "../../general/counter/Counter.container";
import styled from "styled-components";


interface IProps {
  name: string;
  img: string;
  price: number;
  totalPrice: number;
}

const Layout = styled.div`
  display: flex;
  width: 95%;
  margin: 1vh auto;
  border: 2px solid black;
  border-radius: 15px;
  font-size: 3vh;
  background-color: white;
  img{
    width: 150px;
    height: 150px;
  }
`;

const RightPart = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 2vh 0;
  padding-right: 2vh;
  width: 90%;
  margin-left: 4vw;
  
`;

const Quantity = styled.span`
  margin: auto 0;
`;

const ProductInfo = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CartItem = (props: IProps) => {
  return(
    <Layout>
      <span>
        <img src={props.img ? props.img : "images/wheelImg.png"} />
      </span>
      <RightPart>
        <ProductInfo>
          <div>
            {props.name}
          </div>
          <div>
            {props.price} руб./шт
          </div>
        </ProductInfo>
        {/*<Quantity>*/}
        {/*  <CounterContainer />*/}

        {/*  <span>{props.totalPrice}</span>*/}
        {/*</Quantity>*/}
      </RightPart>
    </Layout>
  )
}

export default CartItem;