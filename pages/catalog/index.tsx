import React from "react";
import MainLayout from "../../src/components/general/layouts/mainlayout/MainLayout";
import CatalogContainer from "../../src/components/catalog/Catalog.container";


export default function Home() {
  return (
    <MainLayout>
      <CatalogContainer />
    </MainLayout>
  )
}