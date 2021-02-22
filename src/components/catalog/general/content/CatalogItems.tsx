import React from 'react';
import ListItem from "./ListItem";
import {IProductData} from "../../../../interfaces/catalog/ICatalog";
import classes from "./CatalogItems.module.css";


interface IProps {
  data: IProductData[];
  addToCart: (id: number) => void;
  className?: string;
}

const CatalogItems = (props: IProps) => {
  return(
    <div className={classes.container}>
      <span className={classes.layout}>
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
      </span>
    </div>
  )
}

export default CatalogItems;