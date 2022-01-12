import React from 'react';
import api from '../../apis/Github';
import Paragraph from '../Paragraph/Paragraph';
import Title from '../Title/Title';
import { Container } from './CardStar.styled';
import { GlobalContext } from '../../global/GlobalContext';

const CardStar = () => {
  const [star, setStar] = React.useState(null);
  const { user, setShowStarred } = React.useContext(GlobalContext);

  React.useEffect(() => {
    api
      .get(`${user}/starred`)
      .then(res => {
        setStar(res.data);
        setShowStarred(true);
      })
      .catch(() => {
        setShowStarred(false);
      });
  }, [user, setShowStarred]);

  return (
    <>
      {star && <Title size="h2" text="Lista de Favoritos: " />}
      <Container>
        {star &&
          star.map((starred, index) => {
            return (
              <div key={index}>
                <Title size="h2" margin="2% 0" text={starred.name} />
                <a href={starred.html_url}>
                  <Paragraph
                    fontSize="small"
                    margin="-1% 0 2% 0"
                    text="Visite aqui o repositório"
                  />
                </a>
              </div>
            );
          })}
      </Container>
    </>
  );
};

export default CardStar;
