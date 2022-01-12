import React from 'react';
import api from '../../apis/Github';
import Title from '../Title/Title';
import { Container, BoxInfo, BoxImage } from './CardUser.styled';
import { GlobalContext } from '../../global/GlobalContext';

const CardUser = () => {
  const [name, setName] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const { user, setShowUser, setMessage } = React.useContext(GlobalContext);

  React.useEffect(() => {
    api
      .get(`${user}`)
      .then(res => {
        if (res.data.name) {
        setName(res.data.name);
        setImage(res.data.avatar_url);
        setMessage('Usuário encontrado com Sucesso');
        setShowUser(true);
        console.log(res)
        } else {
        setShowUser(false);
          setMessage('Usuário não encontrado');
        }
      })
      .catch(() => {
        setShowUser(false);
        setMessage('Usuário não encontrado');
      });
  }, [user, setShowUser, setMessage]);

  return (
    <>
      {name && (
        <Container>
          <>
            <BoxImage>
              <img src={image} alt="Imagem de Perfil" />
            </BoxImage>
            <BoxInfo>
              {<Title size="h2" text="Nome do usuário:" />}
              {<Title size="h2" text={name} />}
            </BoxInfo>
          </>
        </Container>
      )}
    </>
  );
};

export default CardUser;
