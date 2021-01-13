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
`;

const Tab = styled.div`
  padding: 1vh 2vw;
  background-color: #3E94D1;
  color: white;
  font-size: 2vh;
`;

const CatalogTabs = (props: IProps) => {
  return(
    <Tabs>
      <Tab>
        <Link href={props.data.tires.sectionLink}>
          <a>{props.data.tires.sectionName}</a>
        </Link>
      </Tab>
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
      <Tab>
        <Link href={props.data.carGoods.sectionLink}>
          <a>{props.data.carGoods.sectionName}</a>
        </Link>
      </Tab>
    </Tabs>
  )
}

export default CatalogTabs;