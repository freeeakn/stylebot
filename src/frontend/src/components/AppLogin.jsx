import TelegramLoginButton from 'react-telegram-login';
import { useState } from 'react';

const AppLogin = () => {

  const handleTelegramResponse = response => {
    console.log(response);
  };

  return (
    <>
    <TelegramLoginButton dataOnauth={handleTelegramResponse} buttonSize="small" botName="styletest1223Bot" language="ru" />
    </>
  );
};

export default AppLogin;