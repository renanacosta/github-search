import styled from 'styled-components';

export const InputSearch = styled.input`
  background: ${(props) => props.background};
  font-size: ${(props) => props.size};
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  font-weight: ${(props) =>  props.fontWeight};
  padding: ${(props) => props.paddingLeft};
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props) => props.margin};
  @media (max-width: 567px) {
    width: 100%;
  }
`;