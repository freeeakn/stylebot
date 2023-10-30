import TelegramLoginButton from 'react-telegram-login';
import axios from 'axios';

const AppLogin = () => {

  const handleTelegramResponse = response => {
    console.log(response);
    axios.post('http://127.0.0.1:8000/api/v1/login', response)
  };

  return (
    <>
    <TelegramLoginButton dataOnauth={handleTelegramResponse} buttonSize="small" botName="styletest1223Bot" language="en" />
    </>
  );
};

export default AppLogin;