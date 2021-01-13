import React from 'react';
import SearchFeedbackReduxForm from "./form/SearchFeedbackForm";
import styled from "styled-components";


const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: row;
  color: white;
  background-color: #3e94d1;
  border-radius: 10px;
  border: 2px solid #a9a9a9;
`

const Half = styled.span`
  padding: 4vh 4vw;
`

const SearchFeedBack = () => {
  return(
    <Layout>
      <Half>
        Здесь будет картинка
      </Half>
      <Half>
        <SearchFeedbackReduxForm />
      </Half>
    </Layout>
  )
}

export default SearchFeedBack;