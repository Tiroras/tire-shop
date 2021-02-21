import React from 'react';
import CounterContainer from "../../general/counter/Counter.container";
import styled from "styled-components";


interface IProps {
  name: string;
  img: string;
  price: number;
  totalPrice: number;
}

const Div = (props) => {
  return(
    <div className={props.className}>
      {props.children}
    </div>
  )
}

const Span = (props) => {
  return(
    <Span className={props.className}>
      {props.children}
    </Span>
  )
}

const Layout = styled(Div)`
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

const RightPart = styled(Span)`
  display: flex;
  justify-content: space-between;
  padding: 2vh 0;
  padding-right: 2vh;
  width: 90%;
  margin-left: 4vw;
  
`;

const Quantity = styled(Span)`
  margin: auto 0;
`;

const ProductInfo = styled(Span)`
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
      </RightPart>
    </Layout>
  )
}

export default CartItem;