import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
`

export const BoxImage = styled.div`
    display: flex;
    margin-top: 5%;

`

export const ImageLogo = styled.img`
    background: black;
    padding: 15px;
    border-radius: 10px;
    margin: 10px auto;
    width: 250px;
    

`

export const BoxSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const BoxButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    padding: 10px;
    gap: 15%;
    @media (max-width: 500px) {
        width: 80%;
    }
 `

export const RepositoriesList = styled.div`
    text-align: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #000;
    border-radius: 10px;
    @media (max-width: 967px) {
    width: 80%;
  }
`

export const FavoriteList = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    @media (max-width: 967px) {
    width: 80%;
  }
`

export const PictureUser = styled.img`
    border-radius: 50%;
    width: 150px;
    margin: 0 auto;
    padding: 10px;

`

export const UserData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 50%;
    @media (max-width:967px) {
    width: 80%;
    text-align: center;
  }
    `