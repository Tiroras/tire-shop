import React, {useEffect, useState} from 'react';
import Post from "./Post";


interface IProps {
  img: string;
  header: string;
  text: string;
}

const PostContainer = (props: IProps) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    let dateNow = new Date;
    setDate(
      `${dateNow.getFullYear()}.${dateNow.getMonth()+1}.${dateNow.getDate()} 
      ${dateNow.getHours()}:${dateNow.getMinutes()}`);
  })

  return(
    <Post
      img={props.img}
      header={props.header}
      text={props.text}
      date={date}
    />
  )
}

export default PostContainer;