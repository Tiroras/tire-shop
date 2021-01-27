import React from 'react';
import RegistrationReduxForm from "../src/components/login/RegistrationForm";
import MainLayout from "../src/components/general/layouts/mainlayout/MainLayout";


const Registration = () => {
  return(
    <MainLayout>
      <RegistrationReduxForm />
    </MainLayout>
  )
}

export default Registration;