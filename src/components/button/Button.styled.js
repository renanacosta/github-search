import styled from 'styled-components';

export const Btn = styled.button`
  align-items: ${props => props.align};
  min-height: ${(props) => props.height };
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  box-shadow: ${(props) => props.boxShadow};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.fontWeight};
  cursor: ${(props) => props.cursor};
`;
