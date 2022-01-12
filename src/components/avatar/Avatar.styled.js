import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxImage = styled.div`
  width: 20%;
  background-color: ${(props) => props.theme.backgroundInverse};
  color: ${(props) => props.theme.textInverse};
  padding: 7% 0;
  border-radius: 50px;
`;

export const BoxInfo = styled.div`
  width: 70%;
  background-color: ${(props) => props.theme.backgroundInverse};
  color: ${(props) => props.theme.textInverse};
  padding: 7% 0;
  border-radius: 30px;
`;
