import React from 'react';
import MainLayout from "../../src/components/general/layouts/mainlayout/MainLayout";
import styled from "styled-components";


const Layout = styled.div`
  h2{
    text-align: center;
  }
`;

const TireFitting = () => {
  return(
    <MainLayout>
      <Layout>
        <div>
          <h2>Шиномонтаж</h2>
        </div>
        <div>
          Приобретайте зимние шины известных брендов и получайте шиномонтаж БЕСПЛАТНО!
          <br />
          Шиномонтаж и балансировка производятся в Вашем присутствии за 20-30 минут. Специалисты сервиса строго соблюдают все требования и стандарты установки сезонной резины.
          <br />
          Услуги легкового и грузового шиномонтажа выполняются по доступной цене с высоким уровнем качества.
          <br />
          В компании М.Шина действует гибкая система скидок. Для постоянных клиентов и держателей дисконтных карт при покупке комплекта шин или дисков предоставляется дополнительная скидка на шиномонтаж и балансировку колес.
        </div>
      </Layout>
    </MainLayout>
  )
}

export default TireFitting;