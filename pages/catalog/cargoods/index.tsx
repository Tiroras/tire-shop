import React from "react";
import MainLayout from "../../../src/components/general/layouts/mainlayout/MainLayout";
import CarGoodsCatalogContainer from "../../../src/components/catalog/cargoods/CarGoodsCatalog.container";


export default function Home() {
  return (
    <MainLayout>
      <CarGoodsCatalogContainer />
    </MainLayout>
  )
}