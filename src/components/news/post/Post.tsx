import React from 'react';
import Link from "next/link";
import classes from "./Post.module.css";


interface IProps {
  id: number
  img: string;
  header: string;
  text: string;
  date: any;
  className?: string;
}

const Post = (props: IProps) => {
  return(
    <div className={classes.layout}>
      <Link href={`/news/p/[id]`} as={`/news/p/${props.id}`}>
        <a>
          <div className={"img"}>
            <img src={props.img} />
          </div>
          <div className={classes.header}>
            <h3>{props.header}</h3>
          </div>
        </a>
      </Link>
      <div className={"text"}>
        {props.text}
      </div>
      <div className={classes.date}>
        {props.date}
      </div>
    </div>
  )
}

export default Post;