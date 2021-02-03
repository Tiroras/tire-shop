import React from "react";
import styled from "styled-components";


const Layout = styled.div`
  h2{
    text-align: center;
  }
`;

const SeasonStorage = () => {
  return(
    <Layout>
      <div>
        <h2>Сезонное хранение</h2>
      </div>
      <div>
        Вы можете воспользоваться услугами сезонного хранения шин в нашем салоне.
        <br />
        <br />
        За подробностями обратитесь в салон
      </div>
    </Layout>
  )
}

export default SeasonStorage;