import React from "react";
import MainLayout from "../../src/components/general/layouts/mainlayout/MainLayout";
import ServicesComponent from "../../src/components/services/ServicesComponent";


export default function Home() {
  return (
    <MainLayout>
      <ServicesComponent />
    </MainLayout>
  )
}