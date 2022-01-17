import React, { useState } from 'react';
import { BoxLogin } from './Login.styled';
import assets from '../assets/logInGitHub.png';
import Loading from '../loading/Loading';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const GithubLogin = () => {
    setLoading(true);
    window.open('http://localhost:5000/auth/github', '_self');

    localStorage.setItem('github', 'true');
    window.addEventListener('storage', (e) => {
      if (e.key === 'github') {
        setLoading(false);
      }
    }
    );

  };
  return (
    <BoxLogin>

      <div>
        <img
          data-testid="logInGitHub"
          src={assets}
          alt='logo'
          onClick={GithubLogin}
          title='Login'
          style={{
            cursor: 'pointer',
            width: '300px',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            padding: '10px',
            marginLeft: 'auto',
            marginRight: '5%'
          }}
        />
        {loading && <Loading />}
      </div>
    </BoxLogin>
  );
};

export default Login;
