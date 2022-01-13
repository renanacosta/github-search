import React, { useContext, useState } from 'react';
import Button from './components/button/Button';
import { InputSearch } from './components/input/Input.styled';
import { Repositories, ProfileUser, Favorites } from './api/Github';
import { GlobalContext } from './global/GlobalContext';
import {
  RepositoriesList,
  Container,
  BoxSearch,
  ImageLogo,
  BoxButton,
  FavoriteList,
  BoxImage,
  PictureUser,
  UserData,
} from './App.styled';
import Logo from './assets/logo.svg';
import { GlobalStyle } from './style/GlobalStyle';

const App = () => {
  const [showRepositorieList, setShowRepositorieList] = useState(false);
  const [showFavoriteList, setShowFavoriteList] = useState(false);
  const {
    username,
    setUsername,
    repositories,
    setRepositories,
    setProfile,
    favorites,
    setFavorites,
    image,
    setImage,
    profile,
  } = useContext(GlobalContext);

  const handleKeys = (e, func) => {
    if (e.key === 'Enter') {
      func();
      setShowRepositorieList(true);
    }
  };

  const getRepositories = () => {
    Repositories(username).then((res) => {
      let repos = [];
      for (let i = 0; i < res.length; i++) {
        repos.push([res[i].name, res[i].description, res[i].html_url]);
      }
      setRepositories(repos);
      setShowRepositorieList(!showRepositorieList);
      setShowFavoriteList(false);
    });
  };

  const getProfile = () => {
    ProfileUser(username).then((res) => {
      setImage(res.avatar_url);
      console.log(res);
      setProfile(res);
    });
  };

  const getFavorites = () => {
    Favorites(username).then((res) => {
      let fav = [];
      for (let i = 0; i < res.length; i++) {
        fav.push([res[i].name, res[i].description, res[i].html_url]);
      }
      setFavorites(fav);
      setShowFavoriteList(!showFavoriteList);
      setShowRepositorieList(false);
    });
  };

  return (
    <Container>
      <GlobalStyle />
      <BoxSearch>
        <BoxImage>
          <ImageLogo src={Logo} alt='logo' />
        </BoxImage>

        <InputSearch
          onKeyUp={(e) => {
            handleKeys(e, getProfile);
          }}
          placeholder='Search user'
          size='18px'
          onChange={(e) => setUsername(e.target.value)}
        />

        <BoxButton>
          <Button
            size='medium' text='Search'
            onClick={() => {
              getRepositories();
              getProfile();
            }}
          />

          <Button
            size='medium' text='Favorites'
            onClick={() => {
              getFavorites();
              getProfile();
            }}
          />
        </BoxButton>
      </BoxSearch>
      {image && (
        <UserData>
          <BoxImage>
            <PictureUser src={image} alt='avatar' />
          </BoxImage>
                  <h3>{profile.name}</h3>
                  <p>{profile.bio}</p>
        </UserData>
      )}

      {showRepositorieList && (
        <RepositoriesList>
          {repositories.map((repository) => {
            return (
                <li key={repository[0]}>
                <h3>{repository[0]}</h3>
                <p>{repository[1]}</p>
              </li>
            );
          })}
        </RepositoriesList>
      )}

      {showFavoriteList && (
        <FavoriteList>
          {favorites.map((favorite) => {
            return (
                <li key={favorite[0]}>
                <h3>{favorite[0]}</h3>
                <p>{favorite[1]}</p>
              </li>
            
            );
          })}
        </FavoriteList>
      )}
    </Container>
  );
};

export default App;
