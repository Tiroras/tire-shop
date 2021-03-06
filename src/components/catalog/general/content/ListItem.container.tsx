import React, {useState} from 'react';
import ListItem from "./ListItem";

interface IProps {
  id: number;
  name: string;
  price: number;
  img: string;
  inStock: boolean;
  addToCart: (id: number) => void;
}

const ListItemContainer = (props: IProps) => {
  const [isHover, setHover] = useState<boolean>(false)

  const showBuyBlock = (isHover: boolean) => {
    switch (isHover) {
      case true: return setHover(false) ;
      case false: return setHover(true)
      default: return setHover(false);
    }
  }

  return(
    <ListItem
      name={props.name}
      price={props.price}
      img={props.img}
      inStock={props.inStock}
      id={props.id}
      addToCart={props.addToCart}
    />
  )
}

export default ListItemContainer;