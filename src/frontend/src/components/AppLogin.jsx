import TelegramLoginButton from 'react-telegram-login';
import axios from 'axios';
import { useEffect } from 'react';

const AppLogin = ({setLogin}) => {

  const handleTelegramResponse = response => {
    console.log(response);
    setLogin(response);
    localStorage.setItem('login', JSON.stringify(response));
    axios.post('api/v1/reg', response)
  };

  return (
    <>
      <TelegramLoginButton dataOnauth={handleTelegramResponse} buttonSize="medium" botName="LookovitsaBot" language="en" />
    </>
  );
};

export default AppLogin;