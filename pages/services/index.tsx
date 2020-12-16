import React from "react";
import MainLayout from "../../public/components/layouts/mainlayout/MainLayout";
import ServicesComponent from "../../public/components/services/ServicesComponent";


export default function Home() {
  return (
    <MainLayout>
      <ServicesComponent />
    </MainLayout>
  )
}