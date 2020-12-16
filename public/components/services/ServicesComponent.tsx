import React from 'react'
import Link from "next/link";
import styled from "styled-components";


const StyledServicesComponent = styled.div`
  font-size: 8vh;
  font-weight: bold;
  text-align: center;
`

const ServicesComponent = () => {
  return(
    <StyledServicesComponent>
      <Link href={"/services/season-storage"}>
        <a>Сезонное хранение</a>
      </Link>
      <br />
      <Link href={"/services/disc-straightening"}>
        <a>Правка дисков</a>
      </Link>
      <br />
      <Link href={"/services/tier-repair"}>
        <a>Ремонт шин</a>
      </Link>
      <br />
      <Link href={"/services/tire-fitting"}>
        <a>Шиномонтаж</a>
      </Link>
    </StyledServicesComponent>
  )
}

export default ServicesComponent;