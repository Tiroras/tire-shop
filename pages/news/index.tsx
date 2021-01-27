import React from "react";
import MainLayout from "../../src/components/general/layouts/mainlayout/MainLayout";
import NewsContainer from "../../src/components/news/News.container";
import {GetServerSideProps} from "next";


const NewsPage = (props) => {
  return (
    <MainLayout>
      <NewsContainer news={props.posts}/>
    </MainLayout>
  )
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const response = await fetch("http://localhost:4200/news/posts");
//   const posts = await response.json();
//   return { props: posts };
// }

export default NewsPage;
