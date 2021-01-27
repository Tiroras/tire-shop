import React from 'react';
import styled from "styled-components";
import Link from "next/link";


interface IProps {
  id: number
  img: string;
  header: string;
  text: string;
  date: any;
}

const Layout = styled.div`
  width: 50%;
  border-radius: 10px;
  border: 2px solid #a9a9a9;
  padding: 2vh 2vh 0 2vh;
`;

const Header = styled.div`
  text-align: center;
`;

const Date = styled.div`
  text-align: right;
  margin-top: 2vh;
`

const Post = (props: IProps) => {
  return(
    <Layout>
      <Link href={`/news/p/[id]`} as={`/news/p/${props.id}`}>
        <a>
          <div className={"img"}>
            <img src={props.img} />
          </div>
          <Header>
            <h3>{props.header}</h3>
          </Header>
        </a>
      </Link>
      <div className={"text"}>
        {props.text}
      </div>
      <Date>
        {props.date}
      </Date>
    </Layout>
  )
}

export default Post;