import React from 'react';
import Link from "next/link";
import {ICatalog} from "../../interfaces/reducers/INav";
import styled from "styled-components";


interface IProps {
  data: ICatalog;
}

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  
  overflow: hidden;
`;

const Tab = styled.div`
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

const CatalogTabs = (props: IProps) => {
  return(
    <Tabs>
      <Link href={props.data.tires.sectionLink}>
        <a>
          <Tab>{props.data.tires.sectionName}</Tab>
        </a>
      </Link>
      <Link href={props.data.disks.sectionLink}>
        <a>
          <Tab>{props.data.disks.sectionName}</Tab>
        </a>
      </Link>
      <Link href={props.data.mats.sectionLink}>
        <a>
          <Tab>{props.data.mats.sectionName}</Tab>
        </a>
      </Link>
      <Link href={props.data.carGoods.sectionLink}>
        <a>
          <Tab>{props.data.carGoods.sectionName}</Tab>
        </a>
      </Link>
    </Tabs>
  )
}

export default CatalogTabs;