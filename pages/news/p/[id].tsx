import React from 'react';
import MainLayout from "../../../src/components/general/layouts/mainlayout/MainLayout";
import PostContainer from "../../../src/components/news/post/Post.container";


const PostPage = ({ post }) => {
  return(
    <MainLayout>
      <PostContainer id={post.id} img={post.img} header={post.header} text={post.text} />
    </MainLayout>
  )
}

PostPage.getInitialProps = async(ctx) => {
  const response = await fetch(`http://localhost:4200/news/${ctx.query.id}`);
  const post = await response.json();
  return { post };
}

export default PostPage;