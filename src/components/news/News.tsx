import React, {useEffect} from 'react';
import styled from "styled-components";
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

const News = (props) => {
  return(
    <Layout>
      <h2>Новости</h2>
      <PostsLayout>
        {props.posts.map((post) => (
          <PostContainer
            id={post.id}
            img={post.img}
            text={post.text}
            header={post.header}
          />
        ))}
      </PostsLayout>
    </Layout>
  )
}

// export const getServerSideProps: GetServerSideProps = async(ctx) => {
//   const response = await fetch("http://localhost:4200/news/posts");
//   const posts = await response.json();
//   return {props: posts}
// }

export default News;