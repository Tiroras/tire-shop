import React from 'react';
import Link from "next/link";
import styled from "styled-components";


interface IProps {
  totalPrice: number;
}

const Layout = styled.div`
  margin-top: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  span{
    width: 50%;
  }
`;

const StyledLink = styled.span`
  padding: 3vh 15vh;
  background-color: #3e94d1;
  color: white;
  transition: 0.3s;
  font-size: 3vh;
  :hover{
    transition: 0.3s;
    transform: scale(1,3);
  }
`;

const TotalPrices = styled.span`
  background-color: #a9a9a9;
  border: 3px solid #727272;
  padding: 3vh 15vh 3vh 3vh;;
  font-size: 3vh;
`;

const GoToPurchase = (props: IProps) => {
  return(
    <Layout>
      <TotalPrices>
        Итоговая стоимость: {props.totalPrice ? props.totalPrice : "0"} руб.
      </TotalPrices>
      <Link href={"/cart/ordering"}>
        <a>
          <StyledLink>Оформить заказ</StyledLink>
        </a>
      </Link>
    </Layout>
  )
}

export default GoToPurchase;