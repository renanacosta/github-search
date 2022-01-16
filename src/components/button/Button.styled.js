import styled from 'styled-components';

export const Btn = styled.button`
  min-height: 3.1em;
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  border-radius: 30px;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  border: 1px solid ${(props) => props.border};
  font-weight: bold;
  cursor: pointer;
`;
