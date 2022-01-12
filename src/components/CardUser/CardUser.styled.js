import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: auto;
  padding: 2%;
  margin: 2% 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 10px;
`;

export const BoxImage = styled.div`
  width: 20%;
  min-width: 100px;
  margin-right: 2%;
  background-color: ${(props) => props.theme.backgroundInverse};
  color: ${(props) => props.theme.textInverse};
  border-radius: 50%;
  img {
    width: 100%;
    display: block;
    padding: 5%;
    border-radius: 50%;
  }
`;

export const BoxInfo = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  gap: 2%;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 7% 0;
  margin-right: 2%;
  border-radius: 30px;
`;
