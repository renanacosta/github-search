import styled from 'styled-components';

export const InputSearch = styled.input`
  background-color: white;
  font-size: ${(props) => props.size};
  height: 2.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding-left: 10px;
  width: 150%;
  border: 1px solid #000;
  border-radius: 30px;
  margin: 10px 0;
  @media (max-width: 567px) {
    width: 100%;
  }
`;
