import React from 'react';
import styled from "styled-components";
import BuyButtonContainer from "../product/BuyButton.container";


interface IProps {
  id: number;
  name: string;
  price: number;
  img: string;
  inStock: boolean;
  className?: string;
  addToCart: (id: number) => void;
}

const Div = (props) => {
  return(
    <div className={props.className}>
      {props.children}
    </div>
  )
}

const Layout = styled(Div)`
  border: 3px solid #a9a9a9;
  border-radius: 15px;
  padding: 0 2vw;
  width: 300px;
  margin-top: 2vh;
  z-index: 10;
  height: 380px;
  transition: 0.3s;
  div{
    margin: 2vh 0;
    display: flex;
    justify-content: space-between;
    img{
      margin: auto;
      width: 200px;
      height: 200px;
    }
  }
  .buyBlock{
    display: none;
  }
  :hover{
    z-index: 1000;
    position: relative;
    transform: scale(1.05);
    transition: 0.3s;
    .buyBlock{
      display: flex;
      
    }
  }
  button{
    padding:1vh 2vh;
  }
`;

const ListItem = (props: IProps) => {
  return(
    <Layout>
      <div>
        <img src={props.img != null ? props.img : "/images/wheelImg.png"}/>
      </div>
      <div>
        {props.name}
      </div>
      <div>
        <span>
          {props.price} руб.
        </span>
        <span>
          {props.inStock ? "В наличии" : "Нет в наличии"}
        </span>
      </div>
      {props.inStock && <BuyButtonContainer id={props.id} addToCart={props.addToCart} />}
    </Layout>
  )
}

export default ListItem;