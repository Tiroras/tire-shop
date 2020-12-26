import React from "react";
import MainLayout from "../../../components/layouts/mainlayout/MainLayout";
import TiresCatalogContainer from "../../../components/catalog/tires/TiresCatalog.container";



export default function tires() {
  return (
    <MainLayout>
      Привет tires
      <TiresCatalogContainer />
    </MainLayout>
  )
}