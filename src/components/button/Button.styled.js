import styled from 'styled-components';

export const Btn = styled.button`
  min-height: 3.1em;
  width: ${(props) => props.width};
  background-color: #ac00f7;
  border-radius: 30px;
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  border: 1px solid ${(props) => props.border};
  font-weight: bold;
  cursor: pointer;
`;
