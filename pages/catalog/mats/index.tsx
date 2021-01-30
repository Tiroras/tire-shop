import React from "react";
import MainLayout from "../../../src/components/general/layouts/mainlayout/MainLayout";
import MatsCatalogContainer from "../../../src/components/catalog/mats/MatsCatalog.container";


export default function Mats() {
  return (
    <MainLayout>
      <MatsCatalogContainer />
    </MainLayout>
  )
}