import React from 'react'
import Link from "next/link";
import styled from "styled-components";


const StyledServicesComponent = styled.div`
  font-size: 8vh;
  font-weight: bold;
  text-align: center;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
  background-color: #3E94D1;
  color: white;
  font-size: 4vh;
  overflow: hidden;
  transition: 0.3s;
  :hover{
    background-color: #0a64a4;
    transition: 0.3s;
    height: 30vh;
    font-size: 6vh;
  }
`;


const ServicesComponent = () => {
  return(
    <StyledServicesComponent>
      <Link href={"/services/season-storage"}>
        <a>
          <Block>Сезонное хранение</Block>
        </a>
      </Link>
      <Link href={"/services/disc-straightening"}>
        <a>
          <Block>Правка дисков</Block>
        </a>
      </Link>
      <Link href={"/services/tier-repair"}>
        <a>
          <Block>Ремонт шин</Block>
        </a>
      </Link>
      <Link href={"/services/tire-fitting"}>
        <a>
          <Block>Шиномонтаж</Block>
        </a>
      </Link>
    </StyledServicesComponent>
  )
}

export default ServicesComponent;