import React from 'react';
import styled from "styled-components";


const Layout = styled.div`
  text-align: center;
`;

const ThereNothing = (props) => {
  return(
    <Layout className={props.className}>
      Упс! Здесь ничего нет
    </Layout>
  )
}

export default ThereNothing;