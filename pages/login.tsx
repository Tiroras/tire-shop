import React from 'react';
import LoginForm from "../src/components/login/LoginForm";
import MainLayout from "../src/components/general/layouts/mainlayout/MainLayout";


const Login = () => {
  return(
    <MainLayout>
      <LoginForm />
    </MainLayout>
  )
}

export default Login;