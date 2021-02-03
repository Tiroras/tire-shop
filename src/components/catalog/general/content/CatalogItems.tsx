import React from 'react';
import ListItem from "./ListItem";
import styled from "styled-components";
import {IProductData} from "../../../../interfaces/catalog/ICatalog";



interface IProps {
  data: IProductData[];
  addToCart: (id: number) => void;
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
    <Layout>
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
      {/*<ListItem img={null} name={"Товар"} inStock={true} price={5000} />*/}
      {/*<ListItem img={null} name={"Товар"} inStock={true} price={5000} />*/}
      {/*<ListItem img={null} name={"Товар"} inStock={false} price={5000} />*/}
      {/*<ListItem img={null} name={"Товар"} inStock={true} price={5000} />*/}
      {/*<ListItem img={null} name={"Товар"} inStock={true} price={5000} />*/}
      {/*<ListItem img={null} name={"Товар"} inStock={true} price={5000} />*/}
      {/*<ListItem img={null} name={"Товар"} inStock={true} price={5000} />*/}
      {/*<ListItem img={null} name={"Товар"} inStock={true} price={5000} />*/}
      {/*<ListItem img={null} name={"Товар"} inStock={true} price={5000} />*/}
      {/*<ListItem img={null} name={"Товар"} inStock={true} price={5000} />*/}
      {/*<ListItem img={null} name={"Товар"} inStock={true} price={5000} />*/}
    </Layout>
  )
}

export default CatalogItems;