import React from 'react';
import { Container } from './CardRepos.styled';
import api from '../../apis/Github';
import Paragraph from '../Paragraph/Paragraph';
import Title from '../Title/Title';
import { GlobalContext } from '../../global/GlobalContext';

const CardRepos = () => {
  const [repos, setRepos] = React.useState(null);
  const { user, setShowRepos } = React.useContext(GlobalContext);

  React.useEffect(() => {
    api
    .get(`${user}/repos`)
    .then(response => {
        setRepos(response.data);
        setShowRepos(true);
      })
      .catch(() => {
        setRepos(false);
      });
  }, [user, setShowRepos]);

  return (
    <>
      {repos && <Title size="h2" text="Lista de Repositórios: " />}
      <Container>
        {repos &&
          repos.map((repo, index) => {
            return (
              <div key={index}>
                <Title size="h2" margin="2% 0" text={repo.name} />
                <a href={repo.html_url}>
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

export default CardRepos;
