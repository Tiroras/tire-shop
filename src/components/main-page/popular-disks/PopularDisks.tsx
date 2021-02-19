import React from 'react';
import Link from "next/link";
import styled from "styled-components";


const Layout = styled.div`
  text-align: center;
  h3{
    font-size: 3vh;
  }
  img{
    width: 70%;
  }
`;

const PopularDisks = (props) => {
  return(
    <Layout className={props.className}>
      <h3>Популярные модели дисков</h3>
      <Link href={"/catalog/disks"}>
        <a>
          <img src={"images/disks/disks.jpg"}/>
        </a>
      </Link>
    </Layout>
  )
}

export default PopularDisks;