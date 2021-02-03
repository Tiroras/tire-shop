import React from 'react';
import TiresFormContainer from "../catalog/tires/form/TiresForm.container";
import DisksFormContainer from "../catalog/disks/form/DiskForm.container";
import SearchFeedBack from "./search-feedback/SearchFeedBack";
import PopularTires from "./popular-tires/PopularTires";
import PopularDisks from "./popular-disks/PopularDisks";
import Link from "next/link";
import styled from "styled-components";


const Layout = styled.div`
  h1{
    text-align: center;
  }
`;

const CFormsBlock = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FormBlock = styled.div`
  h3{
    text-align: center;
    font-size: 3vh;
  }
`;

const More = styled.div`
  text-align: center;
  font-size: 3vh;
  h3{
    text-align: center;
    font-size: 3vh;
  }
`;

const MainPage = () => {
  return(
    <Layout>
      <div>
        <div>
          <h1>Подберите для себя шины и диски</h1>
        </div>
        <CFormsBlock>
          <FormBlock>
            <h3>Шины</h3>
            <TiresFormContainer />
          </FormBlock>
          <FormBlock>
            <h3>Диски</h3>
            <DisksFormContainer />
          </FormBlock>
        </CFormsBlock>
      </div>
      <div>
        <SearchFeedBack />
      </div>
      <PopularTires />
      <div>
        <PopularDisks />
      </div>
      <More>
        <h3>
          Адреса наших магазинов
        </h3>
        <div>
          <Link href={"/contacts"}><a>Подробнее</a></Link>
        </div>
      </More>
    </Layout>
  )
}

export default MainPage;