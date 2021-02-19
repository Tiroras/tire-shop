import React from 'react';
import ListItem from "./ListItem";
import styled, {StyledComponent} from "styled-components";
import {IProductData} from "../../../../interfaces/catalog/ICatalog";



interface IProps {
  data: IProductData[];
  addToCart: (id: number) => void;
  className?: string;
}

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  img{
      margin: auto;
      width: 200px;
      height: 200px;
    }
`;

const CatalogItems = (props: IProps) => {
  return(
    <Layout className={props.className}>
      {props.data.map((prop: IProductData) => (
        <ListItem
          key={prop.id}
          id={prop.id}
          name={prop.name}
          price={prop.price}
          img={prop.img}
          inStock={prop.inStock}
          addToCart={props.addToCart}
        />
      ))}
    </Layout>
  )
}

export default CatalogItems;