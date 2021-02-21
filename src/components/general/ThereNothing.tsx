import React from 'react';
import styled from "styled-components";


const Div = (props) => {
  return(
    <div className={props.className}>
      {props.children}
    </div>
  )
}

const Layout = styled(Div)`
  text-align: center;
`;

const ThereNothing = () => {
  return(
    <Layout>
      Упс! Здесь ничего нет
    </Layout>
  )
}

export default ThereNothing;