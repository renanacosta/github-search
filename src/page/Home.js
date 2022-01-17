import React, { useContext, useState, useEffect } from 'react';
import Button from '../components/button/Button';
import { InputSearch } from '../components/input/Input.styled';
import { Repositories, ProfileUser, Favorites } from '../api/Github';
import { GlobalContext } from '../global/GlobalContext';
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
} from './Home.styled';
import Logo from '../assets/logo.svg';
import Loading from '../loading/Loading';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Home = () => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    Repositories(username).then((res) => {
      let repos = [];
      for (let i = 0; i < res.length; i++) {
        repos.push([res[i].name, res[i].description, res[i].html_url]);
      }
      setRepositories(repos);
      setShowRepositorieList(!showRepositorieList);
      setShowFavoriteList(false);
      setLoading(false);
    });
  };

  const getProfile = () => {
    ProfileUser(username).then((res) => {
      setImage(res.avatar_url);
      setProfile(res);
    });
  };

  const getFavorites = () => {
    setLoading(true);
    Favorites(username).then((res) => {
      let fav = [];
      for (let i = 0; i < res.length; i++) {
        fav.push([res[i].name, res[i].description, res[i].html_url]);
      }
      setFavorites(fav);
      setShowFavoriteList(!showFavoriteList);
      setShowRepositorieList(false);
      setLoading(false);
    });
  };

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(username));
    localStorage.setItem('image', JSON.stringify(image));
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('repositories', JSON.stringify(repositories));
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [
    username, image, profile, repositories, favorites
  ]);
  return (
    <Container>
      <Header />
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
          onChange={(e) => setUsername(e.target.value)

          }

        />

        <BoxButton>
          <Button
            color={'#FFF'}
            background={'#ac00f7'}
            size='large'
            text='Repositories'
            onClick={() => {
              getRepositories();
              getProfile();
              localStorage.setItem('login', JSON.stringify(username));
              localStorage.setItem('image', JSON.stringify(image));
              localStorage.setItem('profile', JSON.stringify(profile));
              localStorage.setItem('repositories', JSON.stringify(repositories));
            }}
          />

          <Button
            color={'#FFF'}
            background={'#ac00f7'}
            size='large'
            text='Favorites'
            onClick={() => {
              getFavorites();
              getProfile();
              localStorage.setItem('login', JSON.stringify(username));
              localStorage.setItem('image', JSON.stringify(image));
              localStorage.setItem('profile', JSON.stringify(profile));
              localStorage.setItem('favorites', JSON.stringify(favorites));
            }}
          />
        </BoxButton>
      </BoxSearch>
      {loading && <Loading />}
      {image && (
        <UserData>
          <BoxImage>
            <PictureUser src={image} alt='avatar' />
          </BoxImage>
          <h3>{profile.name}</h3>
          <h4>{profile.login}</h4>
          <p>{profile.bio}</p>
        </UserData>
      )}

      {showRepositorieList && (
        <RepositoriesList>
          <h2>*** REPOSITORIES ***</h2>
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
          <h2>*** FAVORITES ***</h2>
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
      <Footer />
    </Container>
  );
};

export default Home;
