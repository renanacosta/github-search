import styled from 'styled-components';

export const Btn = styled.button`
  min-height: 3.1em;
  width: ${(props) => props.width};
  background-color: snow;
  border-radius: 10px;
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  border: 1px solid ${(props) => props.theme.border};
  cursor: pointer;
`;
