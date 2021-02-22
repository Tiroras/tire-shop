import React from 'react';
import MainLayout from "../../src/components/general/layouts/mainlayout/MainLayout";
import OrderingContainer from "../../src/components/cart/ordering/Ordering.container";


const OrderingPage = () => {
  return(
    <MainLayout>
      <OrderingContainer />
    </MainLayout>
  )
}

export default OrderingPage;