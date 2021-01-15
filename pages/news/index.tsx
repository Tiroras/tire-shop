import React from "react";
import MainLayout from "../../components/general/layouts/mainlayout/MainLayout";
import News from "../../components/news/News";


export default function Home() {
  return (
    <MainLayout>
      <News />
    </MainLayout>
  )
}