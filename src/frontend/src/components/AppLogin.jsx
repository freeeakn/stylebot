import TelegramLoginButton from 'react-telegram-login';
import axios from 'axios';

const AppLogin = ({setLogin}) => {

  const handleTelegramResponse = response => {
    console.log(response);
    setLogin(response);
    localStorage.setItem('login', JSON.stringify(response));
    axios.post('api/v1/login', response)
  };

  return (
    <>
      <TelegramLoginButton dataOnauth={handleTelegramResponse} buttonSize="medium" botName="LookovitsaBot" language="en" />
    </>
  );
};

export default AppLogin;