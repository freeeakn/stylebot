import TelegramLoginButton from 'react-telegram-login';
import axios from 'axios';
import { useState } from 'react';

const AppLogin = () => {
  const [login, setLogin] = useState(null);

  const handleTelegramResponse = response => {
    console.log(response);
    setLogin(response);
    axios.post('api/v1/login', response)
  };

  return (
    <>
      {
        !login &&
        <TelegramLoginButton dataOnauth={handleTelegramResponse} buttonSize="small" botName="LookovitsaBot" language="en" />
      }
    </>
  );
};

export default AppLogin;