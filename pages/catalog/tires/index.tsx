import React from "react";
import MainLayout from "../../../src/components/general/layouts/mainlayout/MainLayout";
import TiresCatalogContainer from "../../../src/components/catalog/tires/TiresCatalog.container";



export default function tires() {
  return (
    <MainLayout>
      <TiresCatalogContainer />
    </MainLayout>
  )
}