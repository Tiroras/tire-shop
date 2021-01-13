import React from "react";
import MainLayout from "../../components/layouts/mainlayout/MainLayout";
import CatalogContainer from "../../components/catalog/Catalog.container";


export default function Home() {
  return (
    <MainLayout>
      Привет каталог
      <CatalogContainer />
    </MainLayout>
  )
}