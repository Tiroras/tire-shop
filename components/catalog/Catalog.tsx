import React from 'react';
import {ICatalog} from "../../interfaces/reducers/INav";
import styled from "styled-components";
import CatalogTabs from "./CatalogTabs";


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

const Catalog = (props: IProps) => {
  return(
    <div>
      <CatalogTabs data={props.data} />
    </div>
  )
}

export default Catalog;