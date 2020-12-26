import React from 'react';
import {Provider} from "react-redux";
import store from "../../../redux/reducer";
import MainLayout from "../mainlayout/MainLayout";


const LocalStateLayout = ({children}: any) => {
  return(
    <Provider store={store}>
      <MainLayout>
        {children}
      </MainLayout>
    </Provider>
  )
}

export default LocalStateLayout;