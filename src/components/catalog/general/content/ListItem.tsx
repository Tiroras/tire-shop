import React from 'react';
import styled from "styled-components";


interface IProps {
  name: string;
  price: number;
  img: string;
  inStock: boolean;
}

const Layout = styled.div`
  border: 3px solid #a9a9a9;
  border-radius: 15px;
  padding: 2vw;
  width: 300px;
  margin-top: 2vh;
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
  button{
    padding:1vh 1vw;
  }
`;

const HoverBlock = styled.div`
  display: none;
`;

const Count = styled.span`
  margin: 0 5px;
`;

const ListItem = (props: IProps) => {
  return(
    <Layout>
      <div>
        <img src={props.img != null ? props.img : "/wheelImg.png"}/>
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
      <HoverBlock>
        <span>
          <button>-</button>
          <Count>1</Count>
          <button>+</button>
        </span>
        <span>
          <button>
            Купить
          </button>
        </span>
      </HoverBlock>
    </Layout>
  )
}

export default ListItem;