import React from 'react';
import MainLayout from "../../src/components/general/layouts/mainlayout/MainLayout";
import styled from "styled-components";


const Layout = styled.div`
  h2{
    text-align: center;
  }
`;

const TierRepair = () => {
  return(
    <MainLayout>
      <Layout>
        <div>
          <h2>Ремонт шин</h2>
        </div>
        <div>
          Наш салон осуществляет ремонт сквозных порезов грузовых и легковых шин с использованием технологии "термопресс".
          <br />
          <br />
          Средняя стоимость ремонта отечественной легковой шины - всего 300 руб., при средней стоимости новой шины в 1700 руб.
          <br />
          Средняя стоимость ремонта импортной легковой шины - всего 350 - 900 руб., при средней стоимости новой шины от 2500 до 9000 руб.
          <br />
          Средняя стоимость ремонт ЦМК шины (еврофуры) - всего 500 - 2000 руб., при средней стоимости новой шины от 12000 до 18000 руб.
        </div>
      </Layout>
    </MainLayout>
  )
}

export default TierRepair;