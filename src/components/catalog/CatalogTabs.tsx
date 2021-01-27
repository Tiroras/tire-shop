import React from 'react';
import Link from "next/link";
import {ICatalog} from "../../interfaces/reducers/INav";
import styled from "styled-components";


interface IProps {
  data: ICatalog;
}

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  
  overflow: hidden;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 75vh;
  background-color: #3E94D1;
  color: white;
  font-size: 4vh;
  border: 2px solid #a9a9a9;
  border-top: 0;
  border-bottom: 0;
  overflow: hidden;
  transition: 0.3s;
  :hover{
    background-color: #0a64a4;
    transition: 0.3s;
    width: 30%;
    font-size: 6vh;
  }
`;

const TabLeft = styled(Tab)`
  border-left: 0;
`;

const TabRight = styled(Tab)`
  border-right: 0;
`;

const CatalogTabs = (props: IProps) => {
  return(
    <Tabs>
      <TabLeft>
        <Link href={props.data.tires.sectionLink}>
          <a>{props.data.tires.sectionName}</a>
        </Link>
      </TabLeft>
      <Tab>
        <Link href={props.data.disks.sectionLink}>
          <a>{props.data.disks.sectionName}</a>
        </Link>
      </Tab>
      <Tab>
        <Link href={props.data.mats.sectionLink}>
          <a>{props.data.mats.sectionName}</a>
        </Link>
      </Tab>
      <TabRight>
        <Link href={props.data.carGoods.sectionLink}>
          <a>{props.data.carGoods.sectionName}</a>
        </Link>
      </TabRight>
    </Tabs>
  )
}

export default CatalogTabs;