import React from 'react';
import MainLayout from "../../src/components/general/layouts/mainlayout/MainLayout";
import styled from "styled-components";


const Layout = styled.div`
  h2{
    text-align: center;
  }
`;

const DiscStraightening = () => {
  return(
    <MainLayout>
      <Layout>
        <div>
          <div>
            <h2>Ремонт дисков</h2>
          </div>

          <div>
            Наш салон выполняет ремонт колес, в т.ч. ремонт стальных штампованных дисков и ремонт легкосплавных литых и кованых дисков.
            <br />
            Ремонт дисков это обязательный вид услуги профессионального шиномонтажа. Мы осуществляем ремонт всех видов дисков легковых и малогрузовых автомобилей, а так же ремонт грузовых дисков и дисков спец техники.
            <br />
            За дополнительной информацией обратитесь в салон
          </div>
        </div>
      </Layout>
    </MainLayout>
  )
}

export default DiscStraightening;