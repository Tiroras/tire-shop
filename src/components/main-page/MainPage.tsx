import React from 'react';
import TiresFormContainer from "../catalog/tires/form/TiresForm.container";
import DisksFormContainer from "../catalog/disks/form/DiskForm.container";
import SearchFeedBack from "./search-feedback/SearchFeedBack";
import PopularTires from "./popular-tires/PopularTires";
import PopularDisks from "./popular-disks/PopularDisks";
import Link from "next/link";
import styled from "styled-components";


const CFormsBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const FormBlock = styled.div`
  width: 25%;
  h3{
    text-align: center;
    font-size: 3vh;
  }
`;

const MainPage = () => {
  return(
    <div>
      <div>
        <div>
          Подберите для себя шины и диски
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
      <div>
        <PopularTires />
      </div>
      <div>
        <PopularDisks />
      </div>
      <div>
        <div>
          Адреса наших магазинов
        </div>
        <div>
          <Link href={"/contacts"}><a>Подробнее</a></Link>
        </div>
      </div>
    </div>
  )
}

export default MainPage;