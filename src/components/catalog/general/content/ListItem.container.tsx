import React, {useState} from 'react';
import ListItem from "./ListItem";

interface IProps {
  name: string;
  price: number;
  img: string;
  inStock: boolean;
}

const ListItemContainer = (props: IProps) => {
  let [isHover, setHover] = useState<boolean>(false)

  let showBuyBlock = (isHover: boolean) => {
    switch (isHover) {
      case true: return setHover(false) ;
      case false: return setHover(true)
      default: return isHover;
    }
  }

  return(
    <ListItem
      name={props.name}
      price={props.price}
      img={props.img}
      inStock={props.inStock}
    />
  )
}

export default ListItemContainer;