import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './style/GlobalStyle';
import Home from './page/Home';
import Login from './page/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('authentication has been failed!');
        })
        .then((resObject) => {
          const user_data = {
            id: resObject.user.id,
            avatar: resObject.user.photos[0].value,
            name: resObject.user.displayName,
          };
          localStorage.setItem('logIn', JSON.stringify(user_data));
          setUser(resObject.user);
        })
        .catch((err) => {
        });
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
