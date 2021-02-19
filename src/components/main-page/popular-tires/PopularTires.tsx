import React from 'react';
import Link from "next/link";
import styled from "styled-components";


const Layout = styled.div`
  text-align: center;
  font-size: 3vh;
  h3{
    font-size: 3vh;
  }
  img{
    border-radius: 50%;
    margin-top: 50px;
    width: 200px;
    height: 200px;
  }
  .allTires{
    width: 100%;
    margin: 2vh 0;
  }
`;

const TireTypes = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TireType = styled.span`
  background-color: #3e94d1;
  color: white;
  margin: auto;
  border: 2px solid black;
  border-radius: 15px;
  padding: 2vh;
  height: 400px;
  width: 270px;
  transition: 0.3s;
  :hover{
    transition: 0.3s;
    transform: scale(1.1);
  }
`;

const PopularTires = (props) => {
  return(
    <Layout className={props.className}>
      <h3>Популярные модели шин</h3>
      <div className={"allTires"}>
        <Link href={"/catalog/tires"}><a>Все шины</a></Link>
      </div>
      <TireTypes className={props.className}>
        <TireType className={props.className}>
          <Link href={"/catalog/tires"}><a>Зимние шины</a></Link>
          <img src={"images/tires/winter.jpg"} />
        </TireType>
        <TireType className={props.className}>
          <Link href={"/catalog/tires"}><a>Летние шины</a></Link>
          <img src={"images/tires/summer.jpg"} />
        </TireType>
        <TireType className={props.className}>
          <Link href={"/catalog/tires"}><a>Грузовые шины</a></Link>
          <img src={"images/tires/truck.jpeg"} />
        </TireType>
      </TireTypes>
    </Layout>
  )
}

export default PopularTires;