import React from "react";
import MainLayout from "../../src/components/general/layouts/mainlayout/MainLayout";
import SeasonStorage from "../../src/components/services/season-storage/season-storage";


export default function Home() {
  return (
    <MainLayout>
      <SeasonStorage />
    </MainLayout>
  )
}