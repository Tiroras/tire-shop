import React from 'react';
import styled from "styled-components";
import Post from "./post/Post";
import PostContainer from "./post/Post.container";


const Layout = styled.div`
  h2{
    text-align: center;
  }
`;

const PostsLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const News = () => {
  return(
    <Layout>
      <h2>Новости</h2>
      <PostsLayout>
        <PostContainer
          img={""}
          text={"text"}
          header={"header"}
        />
      </PostsLayout>
    </Layout>
  )
}

export default News;