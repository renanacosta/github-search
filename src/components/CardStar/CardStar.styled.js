import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: auto;
  padding: 2%;
  margin: 2% 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2%;
  text-align: center;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 10px;
`;
